"use client";

import { ErrorBoundary } from 'react-error-boundary';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { MoreHorizontal } from 'lucide-react';

const data = [
    { name: 'Office', value: 55, color: '#A3F4E3' },   // brand
    { name: 'Hybrid', value: 35, color: '#38bdf8' },   // sky-400
    { name: 'Remote', value: 10, color: '#2A2D35' },   // border/dark
];

export default function WorkingFormat() {
    return (
        <div className="bg-card rounded-[32px] p-6 h-full flex flex-col relative w-full border border-border/50">
            <div className="flex items-center justify-between mb-8">
                <h3 className="font-semibold text-[15px]">Working format</h3>
                <button className="text-textSubdued hover:text-textMain"><MoreHorizontal className="w-5 h-5" /></button>
            </div>

            <div className="flex-1 min-h-[160px] relative flex justify-center items-center">
                {/* We use an ErrorBoundary because recharts can sometimes throw on very first SSR render if not careful, though "use client" handles most */}
                <ErrorBoundary fallback={<div className="text-xs text-red-500">Chart Error</div>}>
                    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center">
                        <div className="text-3xl font-bold text-white mb-0.5 mt-2 tracking-tight">418</div>
                        <div className="text-[11px] font-medium text-textSubdued uppercase tracking-widest">Days</div>
                    </div>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius={65}
                                outerRadius={85}
                                paddingAngle={4}
                                dataKey="value"
                                stroke="none"
                                cornerRadius={8}
                                blendStroke
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </ErrorBoundary>
            </div>

            <div className="flex justify-between mt-auto pt-6 px-2">
                {data.map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-1.5">
                        <div className="flex items-center gap-1.5">
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: item.color }}
                            />
                            <span className="text-[15px] font-bold text-white">{item.value}%</span>
                        </div>
                        <span className="text-xs text-textSubdued font-medium pl-3">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
