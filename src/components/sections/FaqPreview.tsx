import Accordion from '@/components/common/Accordion';
import Button from '@/components/common/Button';
import { faqs } from '@/data/faqs';

export default function FaqPreview() {
  // 홈에는 자주 나오는 질문 4개만 보여주고, 전체는 /faq에서 확인한다.
  const featuredIds = ['6', '2', '3', '8'];
  const items = faqs.filter((faq) => featuredIds.includes(faq.id));

  return (
    <section id="faq" className="py-20 bg-sky">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-widest text-navy mb-3">FAQ</p>
          <h2 className="text-h2 mb-4">맡기기 전에 자주 묻는 질문</h2>
          <p className="text-text-muted">추가 요금, 견적, 소요시간, 파손 시 처리 등 가장 많이 묻는 질문을 모았어요.</p>
        </div>

        <Accordion items={items} defaultOpenId={items[0]?.id} />

        <div className="text-center mt-12">
          <Button variant="secondary" size="md" asLink href="/faq">
            자주 묻는 질문 전체 보기
          </Button>
        </div>
      </div>
    </section>
  );
}
