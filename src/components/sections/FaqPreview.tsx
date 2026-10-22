import Accordion from '@/components/common/Accordion';
import { faqs } from '@/data/faqs';

export default function FaqPreview() {
  // 홈에서도 전체 질문을 보여준다. /faq 페이지에서도 같은 목록을 볼 수 있다.
  const items = faqs;

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-4">맡기기 전에 자주 묻는 질문</h2>
          <p className="text-[18px] text-text-muted">추가 요금, 견적, 소요시간, 파손 시 처리 등 가장 많이 묻는 질문을 모았어요.</p>
        </div>

        <Accordion items={items} defaultOpenId={items[0]?.id} />
      </div>
    </section>
  );
}
