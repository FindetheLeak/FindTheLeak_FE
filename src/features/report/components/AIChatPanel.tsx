"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function AIChatPanel({
  onAnalyze,
}: {
  onAnalyze?: (code: string) => void;
}) {
  const [messages, setMessages] = useState<
    { role: "ai" | "user"; content: string }[]
  >([
    {
      role: "ai",
      content:
        "안녕하세요! 리포트 작성을 도와드리겠습니다. POC(취약점 증명)코드를 입력해주세요.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isAnalyzing]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInputValue("");

    // Trigger analysis if provided
    if (onAnalyze) {
      setIsAnalyzing(true);
      onAnalyze(userMessage);

      // Simulate AI response
      setTimeout(() => {
        setIsAnalyzing(false);
        setMessages((prev) => [
          ...prev,
          {
            role: "ai",
            content:
              "입력해주신 PoC 코드를 분석하여 보고서 내용을 자동으로 생성했습니다. 왼쪽의 보고서 내용을 확인해주세요.",
          },
        ]);
      }, 3500);
    }
  };

  const handleCodeInsert = () => {
    setInputValue((prev) => prev + "\n```\n\n```");
  };

  return (
    <div className="flex h-[800px] w-full flex-col items-start gap-4 rounded-2xl border border-[#DADCE0] bg-white p-[25px] pb-[25px] lg:h-[calc(100vh-100px)]">
      {/* Header */}
      <div className="flex h-7 w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0003 6.66668V3.33334H6.66699"
              stroke="#2B7FFF"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.9997 6.66666H4.99967C4.0792 6.66666 3.33301 7.41285 3.33301 8.33332V15C3.33301 15.9205 4.0792 16.6667 4.99967 16.6667H14.9997C15.9201 16.6667 16.6663 15.9205 16.6663 15V8.33332C16.6663 7.41285 15.9201 6.66666 14.9997 6.66666Z"
              stroke="#2B7FFF"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.66699 11.6667H3.33366"
              stroke="#2B7FFF"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.667 11.6667H18.3337"
              stroke="#2B7FFF"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 10.8333V12.5"
              stroke="#2B7FFF"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 10.8333V12.5"
              stroke="#2B7FFF"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="text-base leading-6 text-black">AI 챗봇 대화 내역</h3>
        </div>
        <button className="flex h-7 w-7 items-center justify-center rounded">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 8C2 9.18669 2.35189 10.3467 3.01118 11.3334C3.67047 12.3201 4.60754 13.0892 5.7039 13.5433C6.80026 13.9974 8.00666 14.1162 9.17054 13.8847C10.3344 13.6532 11.4035 13.0818 12.2426 12.2426C13.0818 11.4035 13.6532 10.3344 13.8847 9.17054C14.1162 8.00666 13.9974 6.80026 13.5433 5.7039C13.0892 4.60754 12.3201 3.67047 11.3334 3.01118C10.3467 2.35189 9.18669 2 8 2C6.32263 2.00631 4.71265 2.66082 3.50667 3.82667L2 5.33333"
              stroke="#5F6368"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 2V5.33333H5.33333"
              stroke="#5F6368"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex w-full flex-1 flex-col gap-4 overflow-y-auto pr-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${
              msg.role === "user" ? "justify-end" : ""
            }`}
          >
            {msg.role === "ai" && (
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2B7FFF]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99967 5.33333V2.66667H5.33301"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0003 5.33333H4.00033C3.26395 5.33333 2.66699 5.93028 2.66699 6.66666V12C2.66699 12.7364 3.26395 13.3333 4.00033 13.3333H12.0003C12.7367 13.3333 13.3337 12.7364 13.3337 12V6.66666C13.3337 5.93028 12.7367 5.33333 12.0003 5.33333Z"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.33301 9.33333H2.66634"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.333 9.33333H14.6663"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 8.66667V10"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 8.66667V10"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}

            <div
              className={`flex max-w-[80%] flex-col gap-1 ${
                msg.role === "user" ? "items-end" : "items-start"
              }`}
            >
              <span className="text-xs leading-4 text-[#80868B]">
                {msg.role === "ai" ? "AI 어시스턴트" : "사용자"}
              </span>
              <div
                className={`rounded-[10px] border p-3 whitespace-pre-wrap ${
                  msg.role === "ai"
                    ? "border-[#E8EAED] bg-[#F8F9FA] text-[#3C4043]"
                    : "border-[#BEDBFF] bg-[#EFF6FF] text-[#1C398E]"
                }`}
              >
                <p className="text-sm leading-5">{msg.content}</p>
              </div>
            </div>

            {msg.role === "user" && (
              <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full">
                <Image
                  src="/user-avatar.png"
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>
        ))}
        {isAnalyzing && (
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2B7FFF]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.99967 5.33333V2.66667H5.33301"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.0003 5.33333H4.00033C3.26395 5.33333 2.66699 5.93028 2.66699 6.66666V12C2.66699 12.7364 3.26395 13.3333 4.00033 13.3333H12.0003C12.7367 13.3333 13.3337 12.7364 13.3337 12V6.66666C13.3337 5.93028 12.7367 5.33333 12.0003 5.33333Z"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.33301 9.33333H2.66634"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.333 9.33333H14.6663"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 8.66667V10"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 8.66667V10"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex max-w-[80%] flex-col items-start gap-1">
              <span className="text-xs leading-4 text-[#80868B]">
                AI 어시스턴트
              </span>
              <div className="rounded-[10px] border border-[#E8EAED] bg-[#F8F9FA] p-3 text-[#3C4043]">
                <div className="flex gap-1">
                  <span className="animate-bounce">.</span>
                  <span className="animate-bounce delay-100">.</span>
                  <span className="animate-bounce delay-200">.</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="flex w-full flex-col gap-2 border-t border-[#E8EAED] pt-4">
        <div className="relative w-full">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="메시지를 입력하세요..."
            className="min-h-[80px] w-full resize-none rounded-lg border border-[#DADCE0] p-3 pr-12 text-sm focus:border-[#2B7FFF] focus:outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <div className="absolute right-3 bottom-3 flex gap-2">
            <button
              onClick={handleCodeInsert}
              className="rounded p-1.5 text-[#5F6368] transition-colors hover:bg-gray-100"
              title="코드 삽입"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 18L22 12L16 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 6L2 12L8 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="rounded bg-[#2B7FFF] p-1.5 text-white transition-colors hover:bg-[#1A73E8] disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 2L11 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 2L15 22L11 13L2 9L22 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
