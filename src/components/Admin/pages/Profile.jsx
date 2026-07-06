import { motion } from "framer-motion";

const Profile = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="bg-[#FFFFFF] dark:bg-[#1B1B2B] p-6 rounded-3xl border border-[#BFDBFE] dark:border-[#1E3A8A] shadow-sm"
  >
    <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#FFFFFF]">Profile</h2>
    <p className="mt-4 text-[#64748B] dark:text-[#CBD5E1]">
      This is your profile page. You can keep the existing UI and add your profile fields here.
    </p>
  </motion.div>
);

export default Profile;
