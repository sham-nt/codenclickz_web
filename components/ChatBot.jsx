"use client"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export function ChatBot({ language = "en" }) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const chatHistoryRef = useRef([])
  const apiKeyRef = useRef(process.env.NEXT_PUBLIC_GROQ_API_KEY || "")

  // Initialize welcome message when component mounts or language changes
  useEffect(() => {
    const welcomeMessage = {
      role: "assistant",
      content:
        language === "en"
          ? "Hello! How can I help you today?"
          : "สวัสดี! ฉันจะช่วยคุณได้อย่างไรในวันนี้?",
    }
    
    setMessages([welcomeMessage])
    chatHistoryRef.current = [welcomeMessage]
  }, [language])

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Save chat history to localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem("chatHistory")
    if (savedHistory) {
      try {
        const parsedHistory = JSON.parse(savedHistory)
        if (Array.isArray(parsedHistory) && parsedHistory.length > 0) {
          setMessages(parsedHistory)
          chatHistoryRef.current = parsedHistory
        }
      } catch (error) {
        console.error("Error parsing chat history:", error)
      }
    }
  }, [])

  // Save chat history when it changes
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chatHistory", JSON.stringify(messages))
    }
  }, [messages])

  // Get system prompt based on language
  const getSystemPrompt = () => {
    return language === "en"
      ? "You are a helpful AI assistant. Provide concise, informative responses to user queries. Keep responses under 3 sentences when possible."
      : "คุณเป็นผู้ช่วย AI ที่เป็นประโยชน์ ให้คำตอบที่กระชับและมีข้อมูลสำหรับคำถามของผู้ใช้ รักษาคำตอบให้น้อยกว่า 3 ประโยคเมื่อเป็นไปได้"
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage = { role: "user", content: input }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    chatHistoryRef.current = updatedMessages
    
    // Clear input and set loading state
    setInput("")
    setIsLoading(true)

    try {
      // Check if API key is available
      if (!apiKeyRef.current) {
        throw new Error("API key not found")
      }

      // Prepare context for the AI model
      const systemMessage = {
        role: "system",
        content: getSystemPrompt()
      }

      // Get conversation history (limit to last 10 messages to keep context window manageable)
      const recentMessages = updatedMessages.slice(-10).map(msg => ({
        role: msg.role,
        content: msg.content
      }))

      // Send request to Groq API
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKeyRef.current}`,
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [systemMessage, ...recentMessages],
          temperature: 0.7,
          max_tokens: 500,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error?.message || `API request failed with status ${response.status}`)
      }

      const data = await response.json()

      // Process and add AI response
      if (data.choices && data.choices[0]?.message?.content) {
        const botResponse = {
          role: "assistant",
          content: data.choices[0].message.content.trim(),
        }
        const finalMessages = [...updatedMessages, botResponse]
        setMessages(finalMessages)
        chatHistoryRef.current = finalMessages
      } else {
        throw new Error("Invalid API response format")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      
      // Add error message to chat
      const errorMessage = {
        role: "assistant",
        content:
          language === "en"
            ? "Sorry, I couldn't process your request. Please try again later."
            : "ขออภัย ฉันไม่สามารถประมวลผลคำขอของคุณได้ โปรดลองอีกครั้งในภายหลัง",
      }
      
      setMessages([...updatedMessages, errorMessage])
      chatHistoryRef.current = [...updatedMessages, errorMessage]
    } finally {
      setIsLoading(false)
    }
  }

  // Clear chat history
  const clearChat = () => {
    const welcomeMessage = {
      role: "assistant",
      content:
        language === "en"
          ? "Chat history cleared. How can I help you today?"
          : "ล้างประวัติการแชทแล้ว ฉันจะช่วยคุณได้อย่างไรในวันนี้?",
    }
    
    setMessages([welcomeMessage])
    chatHistoryRef.current = [welcomeMessage]
    localStorage.removeItem("chatHistory")
  }

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 z-50 flex items-center justify-center transition-all duration-200 ease-in-out transform hover:scale-105"
        aria-label={language === "en" ? "Open chat" : "เปิดแชท"}
      >
        <MessageSquare className="h-6 w-6 text-white" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-[360px] sm:w-[420px] h-[600px] z-50 flex flex-col shadow-2xl bg-gray-900 border border-indigo-500/20 rounded-2xl overflow-hidden backdrop-blur-lg">
          {/* Chat Header */}
          <div className="p-4 border-b border-indigo-500/20 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm flex justify-between items-center">
            <h3 className="font-medium text-white text-lg">
              {language === "en" ? "How can we help?" : "เราจะช่วยอะไรคุณได้บ้าง?"}
            </h3>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearChat}
                className="h-8 text-xs text-gray-300 hover:text-white hover:bg-indigo-500/20"
                aria-label={language === "en" ? "Clear chat" : "ล้างแชท"}
              >
                {language === "en" ? "Clear" : "ล้าง"}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 text-gray-300 hover:text-white hover:bg-indigo-500/20"
                aria-label={language === "en" ? "Close chat" : "ปิดแชท"}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-900 to-gray-950">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl p-3.5 ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                      : "bg-gray-800 text-gray-100 shadow-md"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl p-4 bg-gray-800 text-gray-100">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-indigo-500/20 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={language === "en" ? "Type a message..." : "พิมพ์ข้อความ..."}
                className="flex-1 bg-gray-800/50 text-white border-indigo-500/30 focus:border-indigo-400 rounded-xl placeholder:text-gray-400"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl shadow-lg transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed w-11 h-11"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </form>
        </Card>
      )}
    </>
  )
}