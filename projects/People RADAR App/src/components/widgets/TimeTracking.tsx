import { MoreHorizontal, Play, Puzzle, GitPullRequest } from 'lucide-react';
import clsx from 'clsx';

export default function TimeTracking() {
    const tasks = [
        {
            title: 'Build responsive layout',
            time: '2:00:07',
            icon: Puzzle,
            active: false
        },
        {
            title: 'Debug API integration',
            time: '1:12:57',
            icon: GitPullRequest,
            active: false
        }
    ];

    return (
        <div className="bg-card rounded-[32px] p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-[15px]">Time tracking</h3>
                <button className="text-textSubdued hover:text-textMain"><MoreHorizontal className="w-5 h-5" /></button>
            </div>

            <div className="bg-brand rounded-[24px] p-5 mb-6 text-background flex items-center justify-between shadow-lg shadow-brand/10">
                <div>
                    <p className="text-sm font-medium opacity-80 mb-1">Banking app</p>
                    <div className="text-3xl font-bold font-mono tracking-tight">03:37:52</div>
                </div>
                <button className="w-12 h-12 bg-background text-brand rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-md">
                    <Play className="w-5 h-5 fill-current ml-1" />
                </button>
            </div>

            <div className="flex-1 flex flex-col gap-5 overflow-y-auto pr-2 custom-scrollbar">
                {tasks.map((task, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-textMuted group-hover:bg-surfaceHover transition-colors border border-border">
                            <task.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-medium text-textMain group-hover:text-brand transition-colors">{task.title}</h4>
                            <p className="text-xs text-textSubdued font-mono mt-1">{task.time}</p>
                        </div>
                    </div>
                ))}
                {/* Faded copy to show scrollability */}
                <div className="flex items-center gap-4 opacity-40">
                    <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-textMuted border border-border">
                        <Puzzle className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-sm font-medium">Build responsive layout</h4>
                        <p className="text-xs text-textSubdued font-mono mt-1">0:45:12</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
