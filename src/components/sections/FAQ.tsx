import Accordion from '@/components/common/Accordion';
import Button from '@/components/common/Button';
import { faqs } from '@/data/faqs';

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-8">맡기기 전에 자주 묻는 질문</h2>
        </div>

        <Accordion items={faqs} defaultOpenId={faqs[0]?.id} />

        <div className="text-center mt-12">
          <Button variant="primary" size="lg" asLink href="/contact#inquiry-form">
            궁금한 점, 바로 문의하기
          </Button>
        </div>
      </div>
    </section>
  );
}
