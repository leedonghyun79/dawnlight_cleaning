import Button from '@/components/common/Button';
import { company } from '@/data/company';

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white border-t border-border shadow-md">
      <div className="grid grid-cols-2 gap-2 p-2">
        <Button variant="primary" size="md" asLink href="/contact" className="w-full text-center">
          견적 문의하기
        </Button>
        <Button variant="secondary" size="md" asLink href={`tel:${company.phone}`} className="w-full text-center">
          전화 상담
        </Button>
      </div>
    </div>
  );
}
