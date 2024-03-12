"use client";
import { useChat } from "ai/react";

function page() {
  const { input, handleInputChange, handleSubmit, messages, isLoading } =
    useChat();

  return (
    <section className="flex justify-center items-center h-screen">
      <form
        className="max-w-xl w-full bg-[#ebe9e980] backdrop-blur shadow-md p-6 rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="text-white max-h-96 h-full overflow-y-auto">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col mb-2 p-2 rounded-md ${
                m.role === "assistant"
                  ? "self-end bg-[#7997A2]"
                  : "self-start bg-[#153947]"
              } my-4`}
            >
              <span
                className={`text-xs ${
                  m.role === "assistant" ? "text-right" : "text-left"
                }`}
              >
                {m.role === "assistant" ? "IA" : "Você"}
              </span>
              {m.content}
            </div>
          ))}
        </div>
        <div className="flex justify-between my-4">
          <label className="text-[#153947] block font-bold my-2">
            Diga alguma coisa...
          </label>
          <button
            className="bg-[#153947] text-white px-3 py-2 rounded-md
          focus:outline-none disabled:opacity-50"
            disabled={isLoading || !input}
          >
            Enviar
          </button>
        </div>
        <textarea
          rows={4}
          value={input}
          placeholder="Digite sua mensagem aqui ..."
          className="text-black bg-slate-300 px-3 py-2 w-full rounded-md
        focus:outline-none shadow-inner"
          onChange={handleInputChange}
        ></textarea>
      </form>
    </section>
  );
}

export default page;
