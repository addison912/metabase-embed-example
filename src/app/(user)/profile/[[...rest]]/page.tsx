import { UserProfile } from "@clerk/nextjs";

const Profile = () => {
  return (
    <div className="flex flex-col items-center p-12 pt-[calc(var(--header-height)+24px)] max-sm:pt-[calc(var(--header-height)+12px)]">
      <UserProfile />
    </div>
  );
};
export default Profile;
