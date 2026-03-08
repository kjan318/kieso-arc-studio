import { Phone, Mail } from 'lucide-react';

export default function ProfileCard() {
    return (
        <div className="bg-card rounded-[32px] overflow-hidden p-4 relative w-full h-[380px] flex flex-col justify-end">
            {/* Background Image wrapper */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=800"
                    alt="Milena Page"
                    className="w-full h-full object-cover object-top"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 bg-background/40 backdrop-blur-md border border-white/10 p-5 rounded-3xl flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-white mb-1">Milena Page</h2>
                    <p className="text-sm text-gray-300 font-medium tracking-wide">Frontend Developer</p>
                </div>

                <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/10 transition-colors">
                        <Phone className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white text-black hover:bg-gray-200 flex items-center justify-center transition-colors">
                        <Mail className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
