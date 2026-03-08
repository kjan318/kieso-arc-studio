import { Hexagon, ArrowRight } from 'lucide-react';

export default function PremiumCard() {
    return (
        <div className="bg-brand rounded-3xl p-6 text-background relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]">
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/4"></div>

            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center">
                        <Hexagon className="w-5 h-5 fill-current" />
                    </div>
                    <div className="bg-background/10 px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                        $12.99/mo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-1 tracking-tight">HRadar Premium</h3>
                    <p className="text-sm font-medium text-background/80">Automation, AI help & more for pros</p>
                </div>
            </div>
        </div>
    );
}
