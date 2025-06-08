import Link from "next/link";
import ProjectList from "../components/projectList";
import RecordButton from "../components/recordButton";
import SliceButton from "../components/sliceButton";
import ProjectManagmentMenu from "../components/projectManagmentMenu";
export default function HomePage() {
  return (
    <>
      <main className="home-page">
        <Link
          href="/workSpace"
          className="button home-page__button home-page__button_type_create_content"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 0C18.6569 0 20 1.34315 20 3V17C20 18.6569 18.6569 20 17 20H3C1.34315 20 6.44266e-08 18.6569 0 17V3C0 1.34315 1.34315 6.44255e-08 3 0H17ZM9 5V9H5V11H9V15H11V11H15V9H11V5H9Z"
              fill="#0F2123"
            />
          </svg>
          <span>Создать проект</span>
        </Link>
        <section className="home-page__buttons-container">
          <RecordButton />
          <SliceButton />
        </section>
        <section className="projects">
          <header className="projects__header">
            <h2 className="projects__title">Проекты (20)</h2>
            <ProjectManagmentMenu />
          </header>
          <ProjectList />
        </section>
      </main>
    </>
  );
}
