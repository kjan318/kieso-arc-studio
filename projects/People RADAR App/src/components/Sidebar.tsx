import {
    Briefcase, Users, Calendar, DollarSign, LineChart,
    CheckSquare, MessageSquare, Zap, Settings, LogOut, Hexagon
} from 'lucide-react';
import clsx from 'clsx';

export default function Sidebar() {
    const topIcons = [
        { icon: Briefcase, active: true },
        { icon: Users, active: false },
        { icon: Calendar, active: false },
        { icon: DollarSign, active: false },
        { icon: LineChart, active: false },
        { icon: CheckSquare, active: false },
        { icon: MessageSquare, active: false },
        { icon: Zap, active: false },
    ];

    const bottomIcons = [
        { icon: Settings, active: false },
        { icon: LogOut, active: false },
    ];

    return (
        <aside className="fixed left-4 top-4 bottom-4 w-16 bg-surface rounded-3xl flex flex-col items-center py-6 z-10">
            {/* Logo Area */}
            <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-background mb-8">
                <Hexagon className="w-6 h-6 fill-current" />
            </div>

            {/* Main Nav */}
            <nav className="flex-1 flex flex-col gap-6 items-center">
                {topIcons.map((Item, i) => (
                    <button
                        key={i}
                        className={clsx(
                            "w-10 h-10 flex items-center justify-center rounded-full transition-colors",
                            Item.active ? "bg-card text-brand" : "text-textSubdued hover:text-textMain hover:bg-surfaceHover"
                        )}
                    >
                        <Item.icon className="w-5 h-5" />
                    </button>
                ))}
            </nav>

            {/* Bottom Nav */}
            <div className="flex flex-col gap-6 items-center mt-auto">
                {bottomIcons.map((Item, i) => (
                    <button
                        key={i}
                        className="w-10 h-10 flex items-center justify-center rounded-full text-textSubdued hover:text-textMain hover:bg-surfaceHover transition-colors"
                    >
                        <Item.icon className="w-5 h-5" />
                    </button>
                ))}
            </div>
        </aside>
    );
}
