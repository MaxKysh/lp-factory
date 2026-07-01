# Generates a standard (template) Privacy Policy PDF in RU and EN.
# Run with the reportlab venv python. Bracketed [placeholders] must be filled in
# and the document reviewed by a lawyer before publishing.
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable

ARIAL = "/System/Library/Fonts/Supplemental/Arial.ttf"
ARIAL_B = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
UNB = os.path.expanduser("~/Library/Fonts/Unbounded.ttf")
pdfmetrics.registerFont(TTFont("Body", ARIAL))
pdfmetrics.registerFont(TTFont("Body-Bold", ARIAL_B))
pdfmetrics.registerFont(TTFont("Display", UNB))

BRAND = colors.HexColor("#15838c")
INK = colors.HexColor("#1a2226")
MUTED = colors.HexColor("#6a7679")

styles = getSampleStyleSheet()
h_title = ParagraphStyle("t", fontName="Display", fontSize=22, leading=27, textColor=BRAND, spaceAfter=2)
h_sub = ParagraphStyle("s", fontName="Body", fontSize=10.5, leading=15, textColor=MUTED, spaceAfter=2)
h_sec = ParagraphStyle("h", fontName="Body-Bold", fontSize=12.5, leading=17, textColor=INK, spaceBefore=13, spaceAfter=4)
body = ParagraphStyle("b", fontName="Body", fontSize=10.5, leading=15.5, textColor=INK, alignment=TA_LEFT, spaceAfter=5)
note = ParagraphStyle("n", fontName="Body", fontSize=9, leading=13, textColor=MUTED, spaceBefore=10)

DOCS = {
    "public/legal/privacy-policy-ru.pdf": {
        "title": "Политика конфиденциальности",
        "sub": "Chipsa — LP Factory · zavod.chipsa.design · Редакция от 1 июля 2026 г.",
        "sections": [
            ("1. Общие положения",
             ["Настоящая Политика конфиденциальности (далее — «Политика») описывает, как ИП Кыштымов Максим Александрович (далее — «Студия», «мы»), управляющий сайтом zavod.chipsa.design (далее — «Сайт»), обрабатывает персональные данные посетителей и пользователей Сайта.",
              "Используя Сайт и оставляя обращение, вы соглашаетесь с условиями настоящей Политики."]),
            ("2. Оператор и контакты",
             ["Оператор обработки данных: Индивидуальный предприниматель Кыштымов Максим Александрович, 660000, г. Красноярск, ул. Вильского, д. 16, кв. 316. Контактный e-mail: ceo@chipsa.ru. Telegram: @maxkysh."]),
            ("3. Какие данные мы обрабатываем",
             ["а) Данные, которые вы предоставляете самостоятельно: имя, контактные данные и содержание сообщений при обращении через Telegram, форму записи встречи (Calendly) или иными способами.",
              "б) Технические данные, собираемые автоматически: IP-адрес, тип и версия браузера и устройства, источник перехода, просмотренные страницы и действия на Сайте — через файлы cookie и системы веб-аналитики."]),
            ("4. Цели обработки",
             ["Ответ на обращения и коммуникация с вами; предоставление и обсуждение услуг; веб-аналитика и улучшение Сайта; обеспечение безопасности и предотвращение злоупотреблений."]),
            ("5. Правовые основания",
             ["Согласие субъекта персональных данных; исполнение договора или совершение действий по вашему запросу до его заключения; законные интересы Студии, не нарушающие ваших прав."]),
            ("6. Файлы cookie и веб-аналитика",
             ["Сайт использует файлы cookie и сервис веб-аналитики Яндекс.Метрика для оценки посещаемости и улучшения содержания. Вы можете ограничить или отключить cookie в настройках браузера; часть функций при этом может работать некорректно."]),
            ("7. Передача третьим лицам",
             ["Данные могут передаваться поставщикам сервисов (веб-аналитика, хостинг, сервисы записи встреч и мессенджеры — Telegram, Calendly) в объёме, необходимом для указанных целей. Мы не продаём персональные данные третьим лицам."]),
            ("8. Трансграничная передача",
             ["Отдельные сервисы, используемые Сайтом, размещены за пределами страны вашего нахождения. Передача данных таким сервисам осуществляется на основании вашего согласия и в целях, указанных в настоящей Политике."]),
            ("9. Сроки хранения",
             ["Персональные данные хранятся до достижения целей обработки или до отзыва вашего согласия, если иной срок не установлен применимым законодательством."]),
            ("10. Ваши права",
             ["Вы вправе запросить доступ к своим данным, их уточнение или удаление, ограничить обработку, а также отозвать согласие. Для реализации прав направьте запрос на ceo@chipsa.ru."]),
            ("11. Безопасность",
             ["Мы принимаем разумные организационные и технические меры для защиты данных от несанкционированного доступа, изменения, раскрытия или уничтожения."]),
            ("12. Изменения Политики",
             ["Политика может периодически обновляться. Актуальная редакция всегда доступна на Сайте; дата редакции указана в начале документа."]),
            ("13. Контакты",
             ["По вопросам обработки персональных данных: ceo@chipsa.ru, Telegram @maxkysh."]),
        ],
        "footnote": "Типовой документ. Перед публикацией рекомендуется согласовать текст с юристом с учётом ваших процессов обработки данных.",
    },
    "public/legal/privacy-policy-en.pdf": {
        "title": "Privacy Policy",
        "sub": "Chipsa — LP Factory · zavod.chipsa.design · Last updated 1 July 2026",
        "sections": [
            ("1. General",
             ["This Privacy Policy (the “Policy”) describes how Maksim Kyshtymov PR Dizajnerske delatnosti Apexy Novi Sad (the “Studio”, “we”), operating the website zavod.chipsa.design (the “Site”), processes the personal data of visitors and users of the Site.",
              "By using the Site and submitting an enquiry, you agree to this Policy."]),
            ("2. Controller and contacts",
             ["Data controller: Maksim Kyshtymov PR Dizajnerske delatnosti Apexy Novi Sad, Gajeva 1-3, floor 1, unit 3, Novi Sad, Serbia. Contact e-mail: ceo@chipsa.design. Telegram: @maxkysh."]),
            ("3. What data we process",
             ["a) Data you provide yourself: your name, contact details and the content of your messages when you reach out via Telegram, the meeting-booking form (Calendly) or otherwise.",
              "b) Technical data collected automatically: IP address, browser and device type and version, referral source, pages viewed and actions on the Site — via cookies and web-analytics tools."]),
            ("4. Purposes of processing",
             ["Responding to enquiries and communicating with you; providing and discussing services; web analytics and improving the Site; ensuring security and preventing abuse."]),
            ("5. Legal bases",
             ["Your consent; performance of a contract or steps taken at your request before entering into one; the Studio's legitimate interests that do not override your rights."]),
            ("6. Cookies and web analytics",
             ["The Site uses cookies and the Yandex Metrica web-analytics service to measure traffic and improve content. You can limit or disable cookies in your browser settings; some features may then not work correctly."]),
            ("7. Sharing with third parties",
             ["Data may be shared with service providers (web analytics, hosting, meeting-booking and messaging services — Telegram, Calendly) to the extent necessary for the stated purposes. We do not sell personal data."]),
            ("8. Cross-border transfers",
             ["Some services used by the Site are hosted outside your country. Data is transferred to such services on the basis of your consent and for the purposes described in this Policy."]),
            ("9. Retention",
             ["Personal data is stored until the purposes of processing are achieved or until you withdraw your consent, unless a different period is required by applicable law."]),
            ("10. Your rights",
             ["You may request access to your data, its correction or deletion, restrict processing, and withdraw consent. To exercise these rights, email ceo@chipsa.design."]),
            ("11. Security",
             ["We take reasonable organizational and technical measures to protect data against unauthorized access, alteration, disclosure or destruction."]),
            ("12. Changes to this Policy",
             ["This Policy may be updated from time to time. The current version is always available on the Site; the revision date is shown at the top."]),
            ("13. Contacts",
             ["For any questions about data processing: ceo@chipsa.design, Telegram @maxkysh."]),
        ],
        "footnote": "Template document. Before publishing, we recommend having the text reviewed by a lawyer against your actual data-processing practices.",
    },
}


def build(path, data):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    doc = SimpleDocTemplate(path, pagesize=A4, leftMargin=22 * mm, rightMargin=22 * mm,
                            topMargin=20 * mm, bottomMargin=18 * mm,
                            title=data["title"], author="Chipsa")
    story = [Paragraph(data["title"], h_title), Paragraph(data["sub"], h_sub),
             Spacer(1, 4), HRFlowable(width="100%", thickness=1, color=BRAND), Spacer(1, 4)]
    for head, paras in data["sections"]:
        story.append(Paragraph(head, h_sec))
        for p in paras:
            story.append(Paragraph(p, body))
    story.append(Spacer(1, 6))
    story.append(HRFlowable(width="100%", thickness=0.5, color=MUTED))
    story.append(Paragraph(data["footnote"], note))
    doc.build(story)
    print("wrote", path)


for path, data in DOCS.items():
    build(path, data)
