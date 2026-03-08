import Header from '@/components/Header';
import ProfileCard from '@/components/widgets/ProfileCard';
import KPICards from '@/components/widgets/KPICards';
import PremiumCard from '@/components/widgets/PremiumCard';
import TimeTracking from '@/components/widgets/TimeTracking';
import WorkingFormat from '@/components/widgets/WorkingFormat';
import TasksOverview from '@/components/widgets/TasksOverview';
import WorkActivity from '@/components/widgets/WorkActivity';
import AppsURLs from '@/components/widgets/AppsURLs';

export default function Home() {
    return (
        <div className="w-full flex-col flex gap-2 pb-8">
            <Header />

            <div className="grid grid-cols-[1fr_1.2fr_0.9fr] gap-6 mt-2">
                {/* Column 1 */}
                <div className="flex flex-col gap-6">
                    <ProfileCard />
                    <div className="flex-1">
                        <KPICards />
                    </div>
                    <PremiumCard />
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-6">
                    <div className="h-[280px]">
                        <TimeTracking />
                    </div>
                    <div className="h-[260px]">
                        <WorkingFormat />
                    </div>
                    <div className="flex-1">
                        <TasksOverview />
                    </div>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-6 bg-card rounded-[32px] p-6">
                    <div className="h-[320px]">
                        <WorkActivity />
                    </div>
                    <div className="flex-1">
                        <AppsURLs />
                    </div>
                </div>
            </div>
        </div>
    );
}
