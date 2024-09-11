import GroupButtons from "@/components/GroupButtons";
import { HOME_SCREEN_PORTFOLIO } from "./config";
import ProfileList from "./_components/ProfileList";
import { IPageScreen } from "./config/types";

export default function Home({ searchParams }: IPageScreen) {
  const selectedType =
    HOME_SCREEN_PORTFOLIO.find((it) => it.href === searchParams?.type) ||
    HOME_SCREEN_PORTFOLIO[0];
  return (
    <div className="container m-4">
      <div className="flex justify-end w-full">
        <div className="w-[40vh]">
          <GroupButtons items={HOME_SCREEN_PORTFOLIO} />
        </div>
      </div>
      <div>
        <ProfileList type={selectedType.href} />
      </div>
    </div>
  );
}
