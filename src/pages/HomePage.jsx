import PostForSell from "../features/post/PostForSell";
import PostForRent from "../features/post/PostForRent";
import Banner from "../ui/Banner";
import Section from "../ui/Section";
import MiniChatbox from "../features/chatbot/MiniChatbot";

function HomePage() {
  return (
    <div>
      <Section>
        <Banner />
      </Section>
      <Section>
        <h1 className="font-bold pl-3 py-5 text-3xl">Cho thuê xe</h1>
        <PostForRent />
      </Section>
      <Section>
        <h1 className="font-bold pl-3 py-5 text-3xl">Mua bán xe</h1>
        <PostForSell />
      </Section>
      <MiniChatbox />
      {/* chưa làm minichatbox */}
    </div>
  );
}

export default HomePage;
