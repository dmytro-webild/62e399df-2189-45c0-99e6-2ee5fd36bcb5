"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboardGallery from "@/components/sections/hero/HeroBillboardGallery";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import AboutMetric from "@/components/sections/about/AboutMetric";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import ContactText from "@/components/sections/contact/ContactText";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { CheckCircle, FileText, Droplet, Wrench, Star, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="compact"
      sizing="mediumSizeLargeTitles"
      background="fluid"
      cardStyle="glass-elevated"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="VELOX DETAIL"
          navItems={[
            { name: "Услуги", id: "services" },
            { name: "Процесс", id: "process" },
            { name: "Работы", id: "portfolio" },
            { name: "Цены", id: "pricing" },
            { name: "Контакты", id: "contacts" }
          ]}
          button={{ text: "Записаться", href: "#contacts" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Каждая деталь — совершенна"
          description="Профессиональный уход за вашим автомобилем. Керамические покрытия, полировка, защитные плёнки — в нашей студии каждый автомобиль получает внимание, которого заслуживает."
          tag="Детейлинг-студия премиум-класса · Москва"
          tagAnimation="slide-up"
          buttons={[
            { text: "Записаться на детейлинг", href: "#contacts" },
            { text: "Смотреть работы", href: "#portfolio" }
          ]}
          buttonAnimation="slide-up"
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193557.jpg",              imageAlt: "Черный автомобиль с идеальным блеском после детейлинга"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-hat-out-window-car-mirror-view_23-2148756439.jpg",              imageAlt: "Капот автомобиля с зеркальным отражением"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-cleaning-car-interior_23-2148194122.jpg",              imageAlt: "Профессиональная мойка автомобиля"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/preparing-car-before-spray-painting_1157-36583.jpg",              imageAlt: "Керамическое покрытие на кузове автомобиля"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/car-being-taking-care-workshop_23-2149580612.jpg",              imageAlt: "Детейлинг студия интерьер"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/man-polish-salon-car-garage_1157-36596.jpg",              imageAlt: "Премиум автомобиль после обработки"
            }
          ]}
          mediaAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          ariaLabel="Герой секция VELOX DETAIL"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNineteen
          title="Полный спектр ухода за автомобилем"
          description="От базовой полировки до многолетней защиты — выбирайте формат, который нужен именно вашему автомобилю"
          tag="01 — УСЛУГИ"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          features={[
            {
              id: 1,
              tag: "Популярно",              title: "Керамическое покрытие",              subtitle: "Профессиональная нанокерамика 9H",              description: "Защищает лакокрасочное покрытие от царапин, ультрафиолета и химии на срок до 5 лет. Придаёт зеркальную глубину цвету.",              imageSrc: "http://img.b2bpic.net/free-photo/car-wash-detailing-station_1303-22299.jpg",              imageAlt: "Керамическое покрытие автомобиля"
            },
            {
              id: 2,
              tag: "",              title: "Полировка кузова",              subtitle: "Двух- и трёхступенчатая обработка",              description: "Удаляем голограммы, царапины, потёртости. Восстанавливаем первоначальный блеск краски или создаём новый.",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-wearing-protection-equipment_23-2149714350.jpg",              imageAlt: "Машинная полировка кузова"
            },
            {
              id: 3,
              tag: "",              title: "Антигравийная плёнка",              subtitle: "Невидимая броня для кузова",              description: "PPF-плёнка толщиной 150–200 мкм. Защита от сколов и царапин на наиболее уязвимых зонах.",              imageSrc: "http://img.b2bpic.net/free-photo/male-painter-hazmat-suit-inside-car-shop_23-2149750032.jpg",              imageAlt: "Антигравийная защитная плёнка"
            },
            {
              id: 4,
              tag: "",              title: "Химчистка салона",              subtitle: "Глубокая очистка интерьера",              description: "Выводим пятна, запахи, бактерии. Восстанавливаем кожу, пластик, потолок и напольное покрытие.",              imageSrc: "http://img.b2bpic.net/free-photo/view-travel-items-inside-car-ready-trip_23-2151078279.jpg",              imageAlt: "Профессиональная химчистка автомобиля"
            },
            {
              id: 5,
              tag: "",              title: "Оклейка виниловой плёнкой",              subtitle: "Смена цвета без покраски",              description: "Более 200 цветов и текстур: матовый, глянец, хром, металлик, карбон. Обратимо. Без вреда для оригинального ЛКП.",              imageSrc: "http://img.b2bpic.net/free-photo/person-working-car-wrapping_23-2149342636.jpg",              imageAlt: "Виниловая оклейка автомобиля"
            },
            {
              id: 6,
              tag: "",              title: "Детейлинг-уход",              subtitle: "Комплексный профессиональный уход",              description: "Ручная мойка, аппаратная сушка, обработка резины и пластика, защита стёкол. Ваш автомобиль как из салона.",              imageSrc: "http://img.b2bpic.net/free-psd/car-wash-detailing-service-facebook-instagram-story-post-banner-template_120329-5421.jpg",              imageAlt: "Премиум автомобиль после обработки"
            }
          ]}
          ariaLabel="Услуги VELOX DETAIL"
        />
      </div>

      <div id="process" data-section="process">
        <AboutMetric
          title="Процесс, в котором нет случайностей"
          metrics={[
            { icon: CheckCircle, label: "Диагностика и осмотр", value: "01" },
            { icon: FileText, label: "Согласование и смета", value: "02" },
            { icon: Droplet, label: "Подготовка автомобиля", value: "03" },
            { icon: Wrench, label: "Основные работы", value: "04" },
            { icon: Star, label: "Контроль качества", value: "05" }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
          ariaLabel="Процесс работы VELOX DETAIL"
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardThree
          title="Результат — говорит сам за себя"
          description="Избранные проекты из портфолио студии. Каждый автомобиль — история профессионализма и внимания к деталям."
          tag="03 — НАШИ РАБОТЫ"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          gridVariant="bento-grid"
          animationType="slide-up"
          products={[
            {
              id: "porsche",              name: "Porsche Cayenne",              price: "2023",              imageSrc: "http://img.b2bpic.net/free-photo/manager-car-center-customer-expensive-car_651396-1145.jpg",              imageAlt: "Porsche Cayenne с керамическим покрытием"
            },
            {
              id: "bmw",              name: "BMW M5 Competition",              price: "2024",              imageSrc: "http://img.b2bpic.net/free-photo/back-side-view-metallic-silver-coupe-road_114579-4049.jpg",              imageAlt: "BMW M5 оклеена в матовый антрацит"
            },
            {
              id: "mercedes",              name: "Mercedes GLE 63 AMG",              price: "2023",              imageSrc: "http://img.b2bpic.net/free-photo/man-gray-sweater-wipes-car-car-wash_1157-35959.jpg",              imageAlt: "Mercedes GLE с PPF и керамикой"
            },
            {
              id: "audi",              name: "Audi RS7",              price: "2024",              imageSrc: "http://img.b2bpic.net/free-photo/headlights-old-vintage-car_181624-3932.jpg",              imageAlt: "Audi RS7 после трёхступенчатой полировки"
            },
            {
              id: "range-rover",              name: "Range Rover Sport",              price: "2023",              imageSrc: "http://img.b2bpic.net/free-photo/documents-through-open-window-paperwork-back-seat-car-senior-businessman-with-documents_146671-14521.jpg",              imageAlt: "Range Rover Sport восстановленный интерьер"
            },
            {
              id: "ferrari",              name: "Ferrari Roma",              price: "2024",              imageSrc: "http://img.b2bpic.net/free-photo/old-red-car-with-ribbon_181624-38.jpg",              imageAlt: "Ferrari Roma с полной защитой PPF"
            }
          ]}
          ariaLabel="Портфолио работ VELOX DETAIL"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Прозрачные цены без скрытых платежей"
          description="Точная стоимость определяется на диагностике — зависит от класса и состояния автомобиля. Цены указаны для автомобилей класса D (седан/SUV среднего размера)."
          tag="04 — ПРАЙС-ЛИСТ"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          plans={[
            {
              id: "basic",              badge: "",              price: "от 8 000 ₽",              subtitle: "Для поддержания состояния",              buttons: [{ text: "Выбрать", href: "#contacts" }],
              features: [
                "Бесконтактная мойка",                "Аппаратная сушка",                "Чернение резины и пластика",                "Защита стёкол (антидождь)",                "Ароматизация салона"
              ]
            },
            {
              id: "pro",              badge: "Хит сезона",              badgeIcon: Sparkles,
              price: "от 25 000 ₽",              subtitle: "Восстановление блеска",              buttons: [{ text: "Выбрать", href: "#contacts" }],
              features: [
                "Полная подготовка ЛКП",                "Двухступенчатая машинная полировка",                "Нанесение защитного воска или гибрида",                "Обработка резины и пластика",                "Финальная инспекция при подсветке"
              ]
            },
            {
              id: "premium",              badge: "",              price: "от 60 000 ₽",              subtitle: "Долгосрочная защита",              buttons: [{ text: "Выбрать", href: "#contacts" }],
              features: [
                "Полная подготовка и полировка",                "Нанокерамика 9H — 2 слоя",                "Защита дисков и стёкол",                "Сертификат с гарантией 3–5 лет",                "Поствыдачной контроль через 30 дней"
              ]
            }
          ]}
          ariaLabel="Прайс-лист VELOX DETAIL"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Сдал автомобиль с серьёзными голограммами и потёртостями после прошлого «детейлинга» в другом месте. Команда VELOX вытащила машину буквально из убитого состояния. Результат — как с завода, даже лучше. Всё прозрачно, всё объяснили. Рекомендую без оговорок."
          rating={5}
          author="Алексей М."
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1674.jpg", alt: "Алексей М., владелец Porsche Panamera" },
            { src: "http://img.b2bpic.net/free-photo/serious-beautiful-businesswoman-standing-window_1262-1913.jpg", alt: "Марина С., владелица Mercedes GLC 300" },
            { src: "http://img.b2bpic.net/free-photo/successful-man-pointing-camera-with-finger_1262-3118.jpg", alt: "Дмитрий В., владелец BMW X7" },
            { src: "http://img.b2bpic.net/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelsexy-modern-man-dressed-white-shirt-trousers-fashion-male-posing-street-background-europe-city-sunset-sunglasses_158538-22388.jpg", alt: "Сергей К., владелец Ferrari 488" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={true}
          ariaLabel="Отзывы клиентов VELOX DETAIL"
        />
      </div>

      <div id="advantages" data-section="advantages">
        <FeatureCardNineteen
          title="VELOX DETAIL — не просто мойка"
          description="Мы — это мастерская мирового уровня, где каждая деталь имеет значение. Вот почему клиенты выбирают нас."
          tag="06 — НАШИ ПРЕИМУЩЕСТВА"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              tag: "",              title: "Профессиональные материалы",              subtitle: "Сертифицированные бренды",              description: "Работаем только с сертифицированными материалами мировых брендов: Gyeon, Ceramic Pro, XPEL, Hexis. Никакого китайского ноунейма.",              imageSrc: "http://img.b2bpic.net/free-photo/man-polish-salon-car-garage_1157-36593.jpg",              imageAlt: "Профессиональные материалы"
            },
            {
              id: 2,
              tag: "",              title: "Контролируемая среда",              subtitle: "Идеальные условия работы",              description: "Климатический бокс с постоянной температурой и влажностью. Специальное освещение для инспекции. Условия — как в профессиональной покрасочной камере.",              imageSrc: "http://img.b2bpic.net/free-photo/vehicle-mechanics-standing-by-tools-cart-choosing-appropriate-tool-truck-service_342744-1328.jpg",              imageAlt: "Климатический контролируемый бокс"
            },
            {
              id: 3,
              tag: "",              title: "Гарантия на все работы",              subtitle: "Письменная защита",              description: "Письменная гарантия на каждую услугу. Для керамических покрытий — официальный сертификат с серийным номером. Регистрация в системе производителя.",              imageSrc: "http://img.b2bpic.net/free-photo/business-professionals-reading-agreement-text_74855-1490.jpg",              imageAlt: "Гарантийный сертификат"
            },
            {
              id: 4,
              tag: "",              title: "Фото- и видеоотчёт",              subtitle: "Полная прозрачность",              description: "Фотофиксируем автомобиль до и после каждого этапа. Видеозапись процесса по запросу. Полная прозрачность — вы видите за что платите.",              imageSrc: "http://img.b2bpic.net/free-photo/designer-work-office_158595-1181.jpg",              imageAlt: "Фотография и документирование"
            },
            {
              id: 5,
              tag: "",              title: "Комфортное ожидание",              subtitle: "Зона отдыха",              description: "Зона ожидания с кофе, wi-fi и рабочим местом. Или заберём и привезём автомобиль самостоятельно — без лишних движений с вашей стороны.",              imageSrc: "http://img.b2bpic.net/free-photo/digital-nomad-working-remotly-their-project_23-2149241811.jpg",              imageAlt: "Комфортная зона ожидания"
            },
            {
              id: 6,
              tag: "",              title: "Честные сроки и цены",              subtitle: "Без сюрпризов",              description: "Фиксируем стоимость до начала работ. Не берём доплат «в процессе». Если что-то идёт не так — предупреждаем заранее, а не после.",              imageSrc: "http://img.b2bpic.net/free-photo/professional-colleagues-standing-meeting-room-with-documents-focused-female-grey-haired-worker-glasses-reading-report-businessman-looking-camera-teamwork-business-management-concept_74855-7776.jpg",              imageAlt: "Честные цены и сроки"
            }
          ]}
          ariaLabel="Преимущества VELOX DETAIL"
        />
      </div>

      <div id="contacts" data-section="contacts">
        <ContactText
          text="Запишитесь сейчас"
          animationType="entrance-slide"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={true}
          buttons={[{ text: "Заполнить форму", href: "#form" }]}
          ariaLabel="Контакты VELOX DETAIL"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="VELOX DETAIL"
          leftLink={{ text: "Политика конфиденциальности", href: "#" }}
          rightLink={{ text: "Условия использования", href: "#" }}
          ariaLabel="Подвал сайта VELOX DETAIL"
        />
      </div>
    </ThemeProvider>
  );
}
