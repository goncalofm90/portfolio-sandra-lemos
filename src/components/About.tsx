import Card from "./Card";

const About = () => {
  return (
    <div className="w-full bg-slate-50 dark:bg-gray-900 mt-40">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          About Me
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          This is the about page for Sandra Lemos' portfolio. Here you can learn
          more about my background and experience as a Product Designer
          specializing in UX/UI.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
          Featured Projects
        </h2>
      </div>
    </div>
  );
};

export default About;
