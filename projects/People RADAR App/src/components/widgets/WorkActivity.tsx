import { Calendar } from 'lucide-react';
import clsx from 'clsx';

export default function WorkActivity() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const times = ['2pm', '1pm', '12am', '11am', '10am', '9am', '8am'];

    // Generating a grid of 7x7 logic
    // Activity levels: 0=none, 1=low, 2=med, 3=high
    const grid = [
        [0, 1, 2, 3, 2, 1, 0],
        [0, 2, 3, 4, 3, 2, 0],
        [1, 3, 4, 4, 4, 2, 0],
        [1, 4, 4, 4, 4, 3, 1],
        [0, 3, 4, 4, 3, 2, 0],
        [0, 1, 3, 3, 2, 1, 0],
        [0, 0, 1, 2, 1, 0, 0]
    ];

    return (
        <div className="bg-transparent h-full flex flex-col">
            <div className="flex items-center justify-between mb-6 pt-2">
                <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-[15px]">Work activity</h3>
                    <span className="bg-card text-brand text-xs font-medium px-2 py-0.5 rounded-full border border-border">~120h • 79% Avg</span>
                </div>
                <button className="text-textSubdued hover:text-textMain bg-card/50 p-1.5 rounded-lg border border-border"><Calendar className="w-4 h-4" /></button>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-textSubdued font-medium mb-6">
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-border" />
                    <span>0h</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-border/80" />
                    <span>&gt;2h</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-textSubdued/40" />
                    <span>&gt;4h</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span className="text-textMain">&gt;8h</span>
                </div>
            </div>

            <div className="flex flex-1">
                {/* Y-axis labels */}
                <div className="flex flex-col justify-between py-1 pr-4 text-[11px] text-textSubdued font-mono">
                    {times.map((t, i) => <span key={i}>{t}</span>)}
                </div>

                {/* Heatmap Grid */}
                <div className="flex-1 flex flex-col justify-between">
                    {grid.map((row, y) => (
                        <div key={y} className="flex justify-between gap-1 w-full">
                            {row.map((val, x) => (
                                <div
                                    key={`${x}-${y}`}
                                    className={clsx(
                                        "flex-1 aspect-square rounded-[6px] transition-colors cursor-pointer hover:border-brand border border-transparent",
                                        val === 0 ? "bg-surface border-border/20 backdrop-blur-sm shadow-inner" :
                                            val === 1 ? "bg-surfaceHover border-border/40" :
                                                val === 2 ? "bg-textSubdued/30 border-textSubdued/40" :
                                                    val === 3 ? "bg-textSubdued/60 border-textSubdued/70" :
                                                        "bg-white shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                                    )}
                                    // Let's add the striped background for 0h val visually from the screenshot
                                    style={val === 0 ? {
                                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.03) 3px, rgba(255,255,255,0.03) 6px)'
                                    } : {}}
                                />
                            ))}
                        </div>
                    ))}

                    {/* X-axis labels */}
                    <div className="flex justify-between w-full mt-3 text-[11px] text-textSubdued font-medium">
                        {days.map((d, i) => <span key={i} className="flex-1 text-center">{d}</span>)}
                    </div>
                </div>
            </div>
        </div>
    );
}
