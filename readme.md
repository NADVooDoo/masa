# Личный проект «MASA»
  
### Проект выполнен во время прохождения этапа акселерации в HTML Academy на «Профессии фронтенд-разработчик» в команде с менеджером и тестировщиками.  
  
* Студент: [Николай Дидур](https://up.htmlacademy.ru/adaptive/27/user/2158229).
---
  
## **Общие технические требования**  
  
1. Стандарты вёрстки: HTML5, CSS3, прогрессивное улучшение.  
2. Адаптивность сетки: мобильная, планшетная и десктопная версии. **Desktop First.** На всех промежуточных разрешениях используется резиновая вёрстка.  
3. Используемая методология: БЭМ.  
4. Используемые фреймворки: нет.  
5. Используемый препроцессор: Sass (SCSS).  
6. Используемый инструмент автоматизации: Gulp.   
       
    *Для корректной работы сборки необходимо использовать версию* **Node.js 16**.  
         
7. Кроссбраузерность: Chrome, Firefox, Safari.  
8. Графика не предоставляется и её необходимо вырезать самостоятельно.
9. Нестандартные шрифты подключены локально. Скачать можно с [Google Fonts](https://fonts.google.com/).      
10. JavaScript: минимальная реализация, модальные окна, переключения и так далее.  
11. Папка *build* **должна попадать** в репозиторий и находится в основной ветке проекта — это необходимо для проведения оперативного тестирования. При тестировании происходит автоматическая подгрузка репозитория из главной ветки.  

Верстка должна соответствовать Критериям качества:  

[Акселератор: Критерии Фронтенд-разработчик](https://www.notion.so/4814c0ba58c240c4ad87ed2bacef2ff4?pvs=21)   

Верстка проекта выполняется согласно базовому техническому заданию:  

[Базовое Техническое задание к проектам Акселератора](https://www.notion.so/8dbea5d3176143cfa1e9f7080c07797c?pvs=21)   

**Перед сдачей проекта обязательно проверить проект на соответствие критериям и провести [самостоятельное тестирование.](https://www.notion.so/6ac6d0482eb24d6b91568f2333aef1db?pvs=21)**  
    
  ## Требования заказчика  
  
1. Брейкопойнты :  
    - мобильная версия — 320px - 767px  
    - планшетная версия — 768px - 1199px  
    - десктопная версия — от 1200 px и выше  
2. **Бургерное меню**  
    - Бургерное меню открывается через плавную анимацию выпадения. Основная страница затемняется.  
3. **Hero Section**  
    - Слайдеры переключаются автоматически с задержкой 3 секунды.  
    - Кнопками для самостоятельного пролистывания слайдера служат три точки в блоке с текстом слайда.  
    - Слайдер прокручивается бесконечно.  
    - Кнопка `Подробнее` ведёт на несуществующую страницу. В адресе ссылки кнопки можно поставить `#`.  
    - Логотип ведёт на **Главную страницу**.  
    - Основные требования к слайдеру прописаны в [базовом техническом задании](https://www.notion.so/8dbea5d3176143cfa1e9f7080c07797c?pvs=21).  
4. Блок **О проекте**  
    - При клике на кнопку `Подробнее о проекте` доступен попап с формой обратной связи.  
5. Блок **Программы**   
    - Кнопка `Все программы` ведёт на несуществующую страницу. В адресе ссылки кнопки можно поставить `#`.  
    - Слайдер. Основные требования к слайдеру прописаны в [базовом техническом задании](https://www.notion.so/8dbea5d3176143cfa1e9f7080c07797c?pvs=21).  
    - Кнопка `стрелки` ведёт на несуществующую страницу. В многостраничном сайте по этой кнопке был бы переход на страницу **всех программ**.  
    - Слайдер не прокручивается самостоятельно. Управление только через кнопки или по свайпу на мобильных устройствах. При прокручивании полоска под картинками передвигается вправо.  
6. Блок **Новости и материалы**  
    - Список разделов новостей: *Общее*, *Волонтёрство*, *Стажировки*, *Карьера*, *Путешествия*.  
    - Выбранный раздел выделяется согласно стайлгайду. При пагинации показываются следующие материалы.  
    - Раздел работает как фильтр и показывает только те материалы, что имеют указанную тематику. Если по выбранной новости нет материала, блок остаётся пустым. Подразумевается, что сама фильтрация будет происходить на бэкенде, но необходимо реализовать корректную работу интерактивных элементов, чтобы при получении данных работа фильтрации не нарушилась.
    Стили элементов реализовать в соответсвии стайлгайду.
    Производить фильтрацию самих карточек не нужно.  
    - При клике на элементы фильтрации скролла страницы сайты быть не должно  
    - Слайдер не прокручивается самостоятельно. Управление только через кнопки и по свайпу на мобильных устройствах.  
    - Кнопка `стрелки` ведёт на несуществующую страницу. В многостраничном сайте по этой кнопке был бы переход на страницу **всех новостей**.  
    - Слайдер. Основные требования к слайдеру прописаны в [базовом техническом задании](https://www.notion.so/8dbea5d3176143cfa1e9f7080c07797c?pvs=21).  
    - На десктопной версии первая новость в слайдере увеличивается в ширину на размер двух обычных новостей (с учетом расстояния между ними).  
7. Блок **Вопросы и ответы**  
    - Аккордеон. Основные требования к аккордеону прописаны в [базовом техническом задании](https://www.notion.so/8dbea5d3176143cfa1e9f7080c07797c?pvs=21).  
    - По умолчанию у аккордеона ****все вкладки скрыты.  
    - Текст для FAQ  
        - *Ответы*  
            1. Организатором программы является проект “Маса” в сотрудничестве с образовательными учреждениями. Сроки программы обмена могут варьироваться от одного семестра до года.  
            2. Грант на обучение - это финансовая поддержка, которую предоставляет организатор программы обмена студентами для оплаты учебных расходов.  
            3. Студенты, участвующие в проекте, могут использовать полученные знания и навыки в своей будущей профессиональной деятельности или продолжить обучение в высших учебных заведениях.  Кроме того, многие университеты и колледжи предоставляют кредиты за участие в программе обмена студентами.  
            4. Процесс регистрации на программу обмена включает выбор университета-партнера и программы обмена, общение с координатором программы, заполнение заявления и предоставление необходимых документов, прохождение интервью, оформление визы, жилья и страховки, обучение по безопасности за границей и подписание договора об участии в программе. Подробнее можно узнать позвонив в центр.  
8. Блок **Отзывы**  
    - Слайдер. Основные требования к слайдеру прописаны в [базовом техническом задании](https://www.notion.so/8dbea5d3176143cfa1e9f7080c07797c?pvs=21).  
    - Слайдер не прокручивается самостоятельно. Управление только через кнопки и по свайпу на мобильных устройствах. При прокручивании полоска под картинками передвигается вправо.  
9. Блок **Контакты**  
    - Телефон и почта — это кликабельные ссылки. При клике на номер телефона появляется возможность совершить звонок, при клике на почту — открывается почта с возможностью написать письмо.  
    - Карта не скроллится. Карта увеличивается и уменьшается через элементы управления самой подключаемой карты. Маркер установлен на адресе. Карта подключается с помощью библиотеки Leaflet.  
10. Форма **Напишите нам**  
    - Контент полей формы должен проходить валидацию.  
    - Поля формы должны очищаться после её отправки.  
    - По умолчанию в чек-боксе *согласия на* *обработку персональных данных* галочка не проставлена.  
    - Отправка формы возможна только после заполнения всех полей.  
11. **Футер**  
    - Меню в футере состоит из якорных ссылок.  
    - Иконки соцсетей ведут на соцсети компании. В адресе ссылки можно поставить `#`.  
12. **Попап**  
    - Открывается при клике на кнопку `Подробнее о проекте`  
    - По умолчанию в чек-боксе *согласия на обработку персональных данных* галочка не проставлена.  
    - Контент полей формы должен проходить валидацию.  
    - Поля формы должны очищаться после её отправки.  
    - Отправка формы возможна только после заполнения всех полей.  
    - Для модальных диалоговых окон всегда оверлей закрывает весь сайт. Взаимодействие с сайтом при этом должно прекращаться и оставаться только в модальном окне (например, с формой «Напишите нам»). Это делается легко с помощью HTML-элемента `<dialog>` и JS.  
13. Загрузить проект на GitHub Pages перед тестированием  
