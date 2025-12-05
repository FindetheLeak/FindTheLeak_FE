"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ReadmeSectionProps {
  isEditing: boolean;
  onEdit: () => void;
}

const INITIAL_CONTENT = "INITIAL READ ME";

export default function ReadmeSection({
  isEditing,
  onEdit,
}: ReadmeSectionProps) {
  const [content, setContent] = useState(INITIAL_CONTENT);

  return (
    <div className="flex flex-col items-start gap-2.5 self-stretch rounded-2xl bg-white p-10">
      <div className="flex w-full flex-col items-start gap-5">
        <div className="flex items-center gap-[5px]">
          <span className="text-2xl leading-[100%] text-black">readme</span>
          <button onClick={onEdit}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5863 3.85766L10.1423 1.41422C9.93724 1.20918 9.65909 1.09399 9.36907 1.09399C9.07904 1.09399 8.80089 1.20918 8.59578 1.41422L1.85172 8.15774C1.74981 8.25902 1.66901 8.37953 1.614 8.51226C1.55899 8.645 1.53086 8.78733 1.53125 8.93102V11.375C1.53125 11.6651 1.64649 11.9433 1.85161 12.1484C2.05672 12.3535 2.33492 12.4688 2.625 12.4688H11.8125C11.9866 12.4688 12.1535 12.3996 12.2765 12.2765C12.3996 12.1535 12.4688 11.9866 12.4688 11.8125C12.4688 11.6385 12.3996 11.4715 12.2765 11.3485C12.1535 11.2254 11.9866 11.1563 11.8125 11.1563H6.83594L12.5863 5.40477C12.6879 5.3032 12.7685 5.1826 12.8235 5.04988C12.8785 4.91715 12.9068 4.77488 12.9068 4.63121C12.9068 4.48754 12.8785 4.34528 12.8235 4.21255C12.7685 4.07982 12.6879 3.95923 12.5863 3.85766ZM4.97657 11.1563H2.84375V9.02344L7.4375 4.42969L9.57032 6.5625L4.97657 11.1563ZM10.5 5.63281L8.36719 3.5L9.37016 2.49703L11.503 4.62985L10.5 5.63281Z"
                fill="#5F6368"
              />
            </svg>
          </button>
        </div>
        {isEditing ? (
          <textarea
            className="h-[600px] w-full resize-none rounded-md border border-gray-300 p-4 font-mono text-sm focus:border-blue-500 focus:outline-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        ) : (
          <div className="prose w-full max-w-none text-[#3C4043]">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ ...props }) => (
                  <h1 className="mb-4 text-2xl font-bold" {...props} />
                ),
                h2: ({ ...props }) => (
                  <h2 className="mt-6 mb-2 text-base font-normal" {...props} />
                ),
                h3: ({ ...props }) => (
                  <h3 className="mt-4 mb-2 text-base font-normal" {...props} />
                ),
                p: ({ ...props }) => (
                  <p className="mb-4 text-base leading-[160%]" {...props} />
                ),
                ul: ({ ...props }) => (
                  <ul className="mb-4 list-disc pl-6" {...props} />
                ),
                ol: ({ ...props }) => (
                  <ol className="mb-4 list-decimal pl-6" {...props} />
                ),
                li: ({ ...props }) => <li className="mb-1" {...props} />,
                pre: ({ ...props }) => (
                  <pre
                    className="mb-4 overflow-auto rounded bg-gray-100 p-4 text-sm"
                    {...props}
                  />
                ),
                code: ({ ...props }) => (
                  <code
                    className="rounded bg-gray-100 px-1 py-0.5 text-sm"
                    {...props}
                  />
                ),
                table: ({ ...props }) => (
                  <table className="mb-4 w-full border-collapse" {...props} />
                ),
                th: ({ ...props }) => (
                  <th
                    className="border border-[#E8EAED] p-2 text-left font-semibold"
                    {...props}
                  />
                ),
                td: ({ ...props }) => (
                  <td className="border border-[#E8EAED] p-2" {...props} />
                ),
                hr: ({ ...props }) => (
                  <hr className="my-4 border-t border-[#E8EAED]" {...props} />
                ),
                blockquote: ({ ...props }) => (
                  <blockquote
                    className="border-l-4 border-gray-300 pl-4 italic"
                    {...props}
                  />
                ),
                a: ({ ...props }) => (
                  <a className="text-blue-600 hover:underline" {...props} />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
