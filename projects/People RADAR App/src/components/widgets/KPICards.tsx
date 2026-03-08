export default function KPICards() {
    return (
        <div className="flex flex-col gap-4">
            {/* Top Row: Days and Projects */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-3xl p-6 flex flex-col justify-between h-[140px] hover:bg-surfaceHover transition-colors cursor-default">
                    <div className="text-4xl font-bold text-white mb-auto">362</div>
                    <div className="text-sm font-medium text-textSubdued">Days in company</div>
                </div>

                <div className="bg-card rounded-3xl p-6 flex flex-col justify-between h-[140px] hover:bg-surfaceHover transition-colors cursor-default">
                    <div className="text-4xl font-bold text-white mb-auto">12</div>
                    <div className="text-sm font-medium text-textSubdued">Done Projects</div>
                </div>
            </div>

            {/* Bottom Row: Salary */}
            <div className="bg-card rounded-3xl p-6 flex flex-col justify-between h-[140px] hover:bg-surfaceHover transition-colors cursor-default border border-transparent hover:border-border">
                <div className="text-[44px] leading-tight font-bold tracking-tight text-white mb-auto">$4,850</div>
                <div className="text-sm font-medium text-textSubdued">Salary</div>
            </div>
        </div>
    );
}
