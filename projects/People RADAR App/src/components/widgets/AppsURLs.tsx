import { MoreHorizontal } from 'lucide-react';

export default function AppsURLs() {
    const apps = [
        { name: 'VS Code', time: '42:00:07', percent: 35, icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', bgColor: 'bg-transparent' },
        { name: 'Figma', time: '30:00:00', percent: 25, icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', bgColor: 'bg-transparent' },
        { name: 'Chrome DevTools', time: '21:36:07', percent: 18, icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg', bgColor: 'bg-transparent' },
        { name: 'GitHub', time: '14:24:05', percent: 12, icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', bgColor: 'bg-white rounded-full' },
        { name: 'ChatGPT', time: '12:04:01', percent: 10, icon: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', bgColor: 'bg-white rounded-full' }
    ];

    return (
        <div className="bg-transparent mt-8 flex flex-col flex-1 pl-4">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-[15px]">Apps & URLs</h3>
                    <span className="bg-card text-xs font-mono px-2 py-0.5 rounded-full border border-border text-white">15</span>
                </div>
                <button className="text-textSubdued hover:text-textMain"><MoreHorizontal className="w-5 h-5" /></button>
            </div>

            <div className="flex flex-col gap-6">
                {apps.map((app, i) => (
                    <div key={i} className="flex items-center justify-between group cursor-pointer hover:bg-surfaceHover/50 p-2 -mx-2 rounded-2xl transition-colors">
                        <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 flex items-center justify-center ${app.bgColor} shadow-sm drop-shadow-md`}>
                                <img src={app.icon} alt={app.name} className="w-8 h-8 object-contain" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-textMain group-hover:text-brand transition-colors">{app.name}</h4>
                                <p className="text-xs text-textSubdued font-mono mt-0.5">{app.time}</p>
                            </div>
                        </div>

                        <div className="relative w-[42px] h-[42px] flex flex-col items-center justify-center">
                            <svg className="w-full h-full -rotate-90 transform absolute inset-0">
                                <circle cx="21" cy="21" r="18" className="stroke-surfaceHover fill-none" strokeWidth="3" />
                                <circle
                                    cx="21" cy="21" r="18"
                                    className="stroke-white fill-none"
                                    strokeWidth="3"
                                    strokeDasharray={`${(app.percent / 100) * 113} 113`}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <span className="text-[10px] font-bold z-10">{app.percent}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
