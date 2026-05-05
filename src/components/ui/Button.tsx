import { MessageSquare } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";
interface ButtonProps {
    text: string;
    url: string;
}

export default function Button({ text, url }: ButtonProps) {
    const whatsAppTag = () => {
        sendGTMEvent({ event: "whatsapp_click", value: "whatsapp"})
    }
    return (
        <Link
            target="_blank"
            href={url}
            onClick={whatsAppTag}
            className="group flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:bg-orange-600 hover:scale-[1.02] hover:shadow-[0_0_20px_-5px_rgba(239,108,0,0.4)] active:scale-95"
            
        >
            <MessageSquare className="w-5 h-5" />
            {text}
        </Link>
    )
}