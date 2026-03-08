export function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-background p-4 pl-24 text-textMain overflow-hidden">
            <div className="flex-1 max-w-[1600px] mx-auto w-full">
                {children}
            </div>
        </div>
    );
}
