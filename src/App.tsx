import CardGroup from "@/components/CardGroup";
import type { CardElement } from "@/types";
import { Navigation } from "@/components/Navigation";
import HeroSection from "./components/HeroSection";

function App() {
  const cards: CardElement[] = [
    {
      title: "AWS Developer Associate Exam Prep",
      description:
        "Hi! I'm Michelle. Language lover and tutor of English. I specialize in AWS certification preparation and have helped over 150 students achieve their AWS Developer Associate certification. With my background in cloud computing and software development, I can provide practical insights and real-world examples to help you understand complex concepts. I also offer mock interviews and hands-on coding sessions.",
        mentorname: "Mr.Perera",
    
        
      },
    {
      title: "AWS DevOps Engineering Proffesional Exam Prep",
      description:
        "Hey there! I'm a Senior DevOps Engineer with experience at Fortune 500 companies. I specialize in CI/CD pipelines, container orchestration with Kubernetes, and cloud-native architectures. I've helped hundreds of engineers transition into DevOps roles and master tools like Docker, Jenkins, and GitLab. My sessions include hands-on infrastructure as code exercises and real-world automation scenarios.",

        mentorname: "Mr.Ruchira sadaruwan"
      },
    {
      title: "AWS Developer Associate Exam Prep",
      description:
        "Hi! I'm Michelle. Language lover and tutor of English. I specialize in AWS certification preparation and have helped over 150 students achieve their AWS Developer Associate certification. With my background in cloud computing and software development, I can provide practical insights and real-world examples to help you understand complex concepts. I also offer mock interviews and hands-on coding sessions.",
    mentorname: "Mr. Kalana prabashwara"
      },
    {
      title: "Sample title",
      description: "Sample description.",
      mentorname: "Mr. Sabuddhika"
    },
    {
      title: "AWS Developer Associate Exam Prep",
      description:
        "Hi! I'm Michelle. Language lover and tutor of English. I specialize in AWS certification preparation and have helped over 150 students achieve their AWS Developer Associate certification. With my background in cloud computing and software development, I can provide practical insights and real-world examples to help you understand complex concepts. I also offer mock interviews and hands-on coding sessions.",
      mentorname: "Mr. Chalaka maduwantha"
      },
    {
      title: "AWS DevOps Engineering Proffesional Exam Prep",
      description:
        "Hey there! I'm a Senior DevOps Engineer with experience at Fortune 500 companies. I specialize in CI/CD pipelines, container orchestration with Kubernetes, and cloud-native architectures. I've helped hundreds of engineers transition into DevOps roles and master tools like Docker, Jenkins, and GitLab. My sessions include hands-on infrastructure as code exercises and real-world automation scenarios.",
     mentorname: "Mrs.Thilini"
      },
  ];

  return (
    <div>
    <Navigation></Navigation>
    <HeroSection />
    <CardGroup cardElements={cards} />
</div>
  );
}

export default App;
