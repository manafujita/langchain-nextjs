'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    // <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
    //   {messages.length > 0
    //     ? messages.map(m => (
    //         <div key={m.id} className="whitespace-pre-wrap">
    //           {m.role === 'user' ? 'User: ' : 'AI: '}
    //           {m.content}
    //         </div>
    //       ))
    //     : null}

    //   <form onSubmit={handleSubmit}>
    //     <input
    //       className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
    //       value={input}
    //       placeholder="Say something..."
    //       onChange={handleInputChange}
    //     />
    //   </form>
    // </div>
    <div className="relative mx-auto">
      <div className="flex-grow-1 relative isolate flex max-h-[calc(100vh-theme(space.52))] min-h-[calc(100vh-theme(space.52))] w-full overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div id="convoAside" className="peer absolute z-20 flex h-full w-72 -translate-x-full flex-col border-e border-slate-200 bg-white duration-300 dark:border-slate-800 dark:bg-slate-950 max-lg:transition-all lg:static lg:h-auto lg:w-1/4 lg:!translate-x-0 rtl:translate-x-full [&.active]:translate-x-0">
          <div className="flex h-16 items-center border-b border-slate-200 px-6 py-4 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-700 dark:text-white"> Continue Conversation </h3>
          </div>
          <div className="h-full max-h-full flex-grow overflow-auto p-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-600 dark:scrollbar-track-slate-800">
            <div className="grid grid-cols-1 gap-5">
              <div className="active relative isolate flex cursor-pointer items-center before:absolute before:-inset-2 before:-z-10 before:rounded-md before:transition-all before:duration-300 before:content-[''] hover:before:bg-slate-50 hover:before:dark:bg-slate-800 [&.active]:before:bg-slate-100 [&.active]:before:dark:bg-slate-800">
                <div className="inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-700">
                  <img src="../images//avatar/bots/1.jpg" alt="General Bot" />
                </div>
                <div className="ms-4">
                  <h4 className="line-clamp-1 text-sm text-slate-600 dark:text-slate-200"> Hi, chatbot. What&#39;s your name? </h4>
                  <div className="mt-1 text-xs text-slate-500 dark:text-slate-400"> 12 min ago </div>
                </div>
              </div>
              <div className=" relative isolate flex cursor-pointer items-center before:absolute before:-inset-2 before:-z-10 before:rounded-md before:transition-all before:duration-300 before:content-[''] hover:before:bg-slate-50 hover:before:dark:bg-slate-800 [&.active]:before:bg-slate-100 [&.active]:before:dark:bg-slate-800">
                <div className="inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-700">
                  <img src="../images//avatar/bots/2.jpg" alt="CareerWhizAI" />
                </div>
                <div className="ms-4">
                  <h4 className="line-clamp-1 text-sm text-slate-600 dark:text-slate-200"> Hi John, I need help with my job search. I&#39;ve been in marketing but want a change. </h4>
                  <div className="mt-1 text-xs text-slate-500 dark:text-slate-400"> 2 hours ago </div>
                </div>
              </div>
              <div className=" relative isolate flex cursor-pointer items-center before:absolute before:-inset-2 before:-z-10 before:rounded-md before:transition-all before:duration-300 before:content-[''] hover:before:bg-slate-50 hover:before:dark:bg-slate-800 [&.active]:before:bg-slate-100 [&.active]:before:dark:bg-slate-800">
                <div className="inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-700">
                  <img src="../images//avatar/bots/7.jpg" alt="HeartSyncAI" />
                </div>
                <div className="ms-4">
                  <h4 className="line-clamp-1 text-sm text-slate-600 dark:text-slate-200"> Hello, Sync. My partner and I argue a lot and need help with communication. </h4>
                  <div className="mt-1 text-xs text-slate-500 dark:text-slate-400"> 1 weeks ago </div>
                </div>
              </div>
              <div className=" relative isolate flex cursor-pointer items-center before:absolute before:-inset-2 before:-z-10 before:rounded-md before:transition-all before:duration-300 before:content-[''] hover:before:bg-slate-50 hover:before:dark:bg-slate-800 [&.active]:before:bg-slate-100 [&.active]:before:dark:bg-slate-800">
                <div className="inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-700">
                  <img src="../images//avatar/bots/9.jpg" alt="NarrativeAI" />
                </div>
                <div className="ms-4">
                  <h4 className="line-clamp-1 text-sm text-slate-600 dark:text-slate-200"> Hello, Storyteller AI. Can you tell me a bit about the elements of a good story? </h4>
                  <div className="mt-1 text-xs text-slate-500 dark:text-slate-400"> 1 weeks ago </div>
                </div>
              </div>
              <div className=" relative isolate flex cursor-pointer items-center before:absolute before:-inset-2 before:-z-10 before:rounded-md before:transition-all before:duration-300 before:content-[''] hover:before:bg-slate-50 hover:before:dark:bg-slate-800 [&.active]:before:bg-slate-100 [&.active]:before:dark:bg-slate-800">
                <div className="inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-700">
                  <img src="../images//avatar/bots/6.jpg" alt="FitnessBuddyAI" />
                </div>
                <div className="ms-4">
                  <h4 className="line-clamp-1 text-sm text-slate-600 dark:text-slate-200"> How often should I work out? </h4>
                  <div className="mt-1 text-xs text-slate-500 dark:text-slate-400"> 1 weeks ago </div>
                </div>
              </div>
              <div className=" relative isolate flex cursor-pointer items-center before:absolute before:-inset-2 before:-z-10 before:rounded-md before:transition-all before:duration-300 before:content-[''] hover:before:bg-slate-50 hover:before:dark:bg-slate-800 [&.active]:before:bg-slate-100 [&.active]:before:dark:bg-slate-800">
                <div className="inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-700">
                  <img src="../images//avatar/bots/4.jpg" alt="WellBeingGuide" />
                </div>
                <div className="ms-4">
                  <h4 className="line-clamp-1 text-sm text-slate-600 dark:text-slate-200"> How can I eat healthier? </h4>
                  <div className="mt-1 text-xs text-slate-500 dark:text-slate-400"> 1 weeks ago </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-auto px-6 pb-6 pt-4">
            <a href="../app/template-chatbot.html" className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-blue-800">
              <div className="h-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-full">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
              </div>
              <span>Start New</span>
            </a>
          </div>
        </div>
        <div data-target="#convoAside" className="class-toggle absolute inset-0 z-10 hidden bg-slate-950 bg-opacity-20 peer-[.active]:block lg:!hidden"></div>
        <div className="z-0 flex w-full flex-col lg:w-3/4">
          <div className="flex h-full flex-col justify-stretch">
            <div className="h-15 flex items-center justify-between border-b border-slate-200 px-6 py-3 dark:border-slate-800">
              <div className="flex items-center">
                <div className="inline-flex h-9 w-9 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-800">
                  <img src="../images//avatar/bots/1.jpg" alt="General Bot" />
                </div>
                <div className="ms-3">
                  <h4 className="line-clamp-1 text-xs font-bold text-slate-600 dark:text-slate-200"> General Bot </h4>
                  <div className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400"> 12 min ago </div>
                </div>
              </div>
              <button data-target="#convoAside" className="class-toggle -my-1 inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full text-slate-400 transition-all hover:bg-slate-200 hover:text-slate-600 lg:hidden [&.active]:bg-slate-200 [&.active]:text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="h-full max-h-full flex-grow overflow-auto p-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-600 dark:scrollbar-track-slate-800">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex-row-reverse flex items-end gap-4">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-700">
                    <img src="../images/avatar/a.jpg" alt="Phillip Burke" />
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950  max-w-md rounded-md px-4 py-3">
                    <p className="text-sm text-slate-500 dark:text-slate-300"> Hi, chatbot. What&#39;s your name? </p>
                  </div>
                </div>
                <div className=" flex items-end gap-4">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-700">
                    <img src="../images//avatar/bots/1.jpg" alt="Phillip Burke" />
                  </div>
                  <div className=" bg-slate-100 dark:bg-slate-900 max-w-md rounded-md px-4 py-3">
                    <p className="text-sm text-slate-500 dark:text-slate-300"> Hello! I&#39;m Gbot, a friendly AI chatbot. How can I assist you today? </p>
                  </div>
                </div>
                <div className="flex-row-reverse flex items-end gap-4">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-700">
                    <img src="../images/avatar/a.jpg" alt="Phillip Burke" />
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950  max-w-md rounded-md px-4 py-3">
                    <p className="text-sm text-slate-500 dark:text-slate-300"> What&#39;s the weather like in New York City today? </p>
                  </div>
                </div>
                <div className=" flex items-end gap-4">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-700">
                    <img src="../images//avatar/bots/1.jpg" alt="Phillip Burke" />
                  </div>
                  <div className=" bg-slate-100 dark:bg-slate-900 max-w-md rounded-md px-4 py-3">
                    <p className="text-sm text-slate-500 dark:text-slate-300"> I&#39;m sorry, I don&#39;t have access to real-time data. You can check a weather website or app for the latest updates. </p>
                  </div>
                </div>
                <div className="flex-row-reverse flex items-end gap-4">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-700">
                    <img src="../images/avatar/a.jpg" alt="Phillip Burke" />
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950  max-w-md rounded-md px-4 py-3">
                    <p className="text-sm text-slate-500 dark:text-slate-300"> Can you help me with a math problem? What&#39;s 345 multiplied by 67? </p>
                  </div>
                </div>
                <div className=" flex items-end gap-4">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-700">
                    <img src="../images//avatar/bots/1.jpg" alt="Phillip Burke" />
                  </div>
                  <div className=" bg-slate-100 dark:bg-slate-900 max-w-md rounded-md px-4 py-3">
                    <p className="text-sm text-slate-500 dark:text-slate-300"> Sure! 345 multiplied by 67 is 23,115. </p>
                  </div>
                </div>
                <div className="flex-row-reverse flex items-end gap-4">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-700">
                    <img src="../images/avatar/a.jpg" alt="Phillip Burke" />
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950  max-w-md rounded-md px-4 py-3">
                    <p className="text-sm text-slate-500 dark:text-slate-300"> I need a recipe for spaghetti carbonara. Can you help? </p>
                  </div>
                </div>
                <div className=" flex items-end gap-4">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-700">
                    <img src="../images//avatar/bots/1.jpg" alt="Phillip Burke" />
                  </div>
                  <div className=" bg-slate-100 dark:bg-slate-900 max-w-md rounded-md px-4 py-3">
                    <p className="text-sm text-slate-500 dark:text-slate-300"> Of course! Here&#39;s a simple spaghetti carbonara recipe: [recipe link] </p>
                  </div>
                </div>
                <div className="flex-row-reverse flex items-end gap-4">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-700">
                    <img src="../images/avatar/a.jpg" alt="Phillip Burke" />
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950  max-w-md rounded-md px-4 py-3">
                    <p className="text-sm text-slate-500 dark:text-slate-300"> I&#39;m in the mood for a comedy movie. Any recommendations? </p>
                  </div>
                </div>
                <div className=" flex items-end gap-4">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-700">
                    <img src="../images//avatar/bots/1.jpg" alt="Phillip Burke" />
                  </div>
                  <div className=" bg-slate-100 dark:bg-slate-900 max-w-md rounded-md px-4 py-3">
                    <p className="text-sm text-slate-500 dark:text-slate-300"> How about watching &#39;The Grand Budapest Hotel&#39;? It&#39;s a hilarious comedy with a unique visual style. </p>
                  </div>
                </div>
                <div className="flex-row-reverse flex items-end gap-4">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-700">
                    <img src="../images/avatar/a.jpg" alt="Phillip Burke" />
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950  max-w-md rounded-md px-4 py-3">
                    <p className="text-sm text-slate-500 dark:text-slate-300"> I have a headache. What should I do to relieve it? </p>
                  </div>
                </div>
                <div className=" flex items-end gap-4">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-700">
                    <img src="../images//avatar/bots/1.jpg" alt="Phillip Burke" />
                  </div>
                  <div className=" bg-slate-100 dark:bg-slate-900 max-w-md rounded-md px-4 py-3">
                    <p className="text-sm text-slate-500 dark:text-slate-300"> I&#39;m not a doctor, but you can try drinking water, resting in a quiet room, or taking a pain reliever like ibuprofen. If it persists, consider consulting a healthcare professional. </p>
                  </div>
                </div>
                <div className="flex-row-reverse flex items-end gap-4">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-700">
                    <img src="../images/avatar/a.jpg" alt="Phillip Burke" />
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950  max-w-md rounded-md px-4 py-3">
                    <p className="text-sm text-slate-500 dark:text-slate-300"> Can you explain Einstein&#39;s theory of relativity in simple terms? </p>
                  </div>
                </div>
                <div className=" flex items-end gap-4">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-700">
                    <img src="../images//avatar/bots/1.jpg" alt="Phillip Burke" />
                  </div>
                  <div className=" bg-slate-100 dark:bg-slate-900 max-w-md rounded-md px-4 py-3">
                    <p className="text-sm text-slate-500 dark:text-slate-300"> Certainly! Einstein&#39;s theory of relativity explains how gravity works by describing the bending of spacetime around massive objects, like stars and planets. It&#39;s a bit more complex, but that&#39;s the basic idea. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-6">
              <div className="flex items-center gap-4">
                <input className="z-10 w-full rounded-md border-slate-200 bg-white text-sm/[1.125rem] text-slate-600 placeholder:text-slate-400 focus:border-slate-200 focus:shadow-none focus:outline-none disabled:bg-slate-100 disabled:text-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 placeholder:dark:text-slate-500" />
                <button className="inline-flex items-center justify-center rounded-md bg-blue-600 p-3 text-white transition-all hover:bg-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
