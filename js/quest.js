$(function () {
    const $name = $('#name');
    const $img = $('#img');
    const $title = $('#title');
    const $summary = $('#summary');
    const $result = $('#result');
    const $button = $('#button');
    const $help = $('#help');

    const steps = [
        {
            name: "Старт",
            img_src: "https://pbs.twimg.com/profile_images/751848105717276674/F3vCmt3i.jpg",
            title: "С днем рождения!",
            summary: "Это твой квест. Проходя его, помни: квест проходит в квартире, числа - твои друзья, ограничений по времени нет, твои помощники - телефон и гости. Ни пуха!",
            button: "Вперед!",
            result: null
        },
        {
            name: "Задание первое",
            img_src: "https://i.timeout.ru/pix/resize/561/558/750x485.png",
            title: "Под носом",
            summary: "То, что тебе надо, у тебя сейчас в руках. Найди задание и реши",
            button: "Я знаю ответ!",
            result: "60"
        },
        {
            name: "Задание второе",
            img_src: "https://i.pinimg.com/564x/ae/17/28/ae17283c3d2cb7a3e9298a05b3a7c117.jpg",
            title: "Эй, Тони",
            summary: "Открой панду!",
            button: "Вперед!",
            result: "9217"
        },
        {
            name: "Задание третье",
            img_src: "https://i.ytimg.com/vi/C5zNATDTsCQ/hqdefault.jpg",
            title: "В темноте",
            summary: "Следуюший код ты найдешь в самой большой темной комнате, но только при лучах ИНОГО света",
            button: "Нашла!",
            result: "4587"
        },
        {
            name: "Задание четвертое",
            img_src: "https://dz1ambdcpmi0e.cloudfront.net/drink-cans.png",
            title: "Михалыч, это жесть",
            summary: "Иди на балкон и приберись там - это поможет найти подсказку",
            button: "Фух!",
            result: "7428"
        },
        {
            name: "Задание пятое",
            img_src: "https://neftegaz.ru/upload/iblock/30f/30f4fe4f12dc32bd33370597ccb10975.jpg",
            title: "Пораскинь мозгами",
            summary: "Ответом для этого задания будет самый большой атомный номер природного изотопа урана",
            button: "Я умею гуглить!",
            result: "238"
        },
        {
            name: "Задание шестое, не последнее",
            img_src: "https://klike.net/uploads/posts/2020-01/1580117105_13.jpg",
            title: "Пораскинь мозгами #2",
            summary: "Итак, чтобы получить следующий ответ, возьми количество литров в барреле и раздели на количество високосных дней,которые ты прожила. Ответ округли",
            button: "Получилось!",
            result: "20"
        },
        {
            name: "Задание седьмое",
            img_src: "https://wallbox.ru/wallpapers/preview/201532/08f08c01394311f.jpg",
            title: "Арт-терапия",
            summary: "Отдыхая у реки, ты найдешь ответ",
            button: "Отдохнула!",
            result: "64"
        },
        {
            name: "Задание восьмое",
            img_src: "https://novate.ru/files/u36260/plaxkier12dsa.jpg",
            title: "Strange things",
            summary: "Ответ спрятан в диковинной вещи в обители единорогов",
            button: "Ну вы даете!",
            result: "9315"
        },
        {
            name: "Задание девятое",
            img_src: "https://zakon.ru/Content/entriesattachments/6567d90b-5012-4538-80df-67acb8d1c7f8.jpg",
            title: "Штампы, штампы, штампы",
            summary: "Ты пропесочила эту комнату, теперь тебе следует ее опечатать",
            button: "Готово!",
            result: "1718"
        },
        {
            name: "Десятое задание",
            img_src: "https://pro-alko.ru/wp-content/uploads/2019/03/Viski_sauer_klassicheskiy_i_originalnye_recepty_kokteylya__sostav_i_proporcii_1.jpg",
            title: "Фух! Вот это жаришка!",
            summary: "Пора бы нам охладиться. Ответ спрятан В ТОМ, без чего не обойдется ни один коктейль",
            button: "Нашла!",
            result: "7144"
        },
        {
            name: "Финиш!",
            img_src: "https://st3.depositphotos.com/1177973/14063/i/450/depositphotos_140637504-stock-photo-funny-fat-man.jpg",
            title: "Поздравляем! Ты прошла квест! Но сможешь ли ты найти клад? ",
            summary: "Клад спрятан в тайнике у реки",
            button: "Спасибо за квест!",
            result: true
        },
    ];

    let step = 0;

    function renderStep() {
        $name.text(steps[step].name);
        if (steps[step].img_src) {
            $img.attr('src', steps[step].img_src);
            $img.show();
        } else {
            $img.attr('src', '');
            $img.hide();
        }
        if (steps[step].result === null || steps[step].result === true) {
            $result.hide();
        } else {
            $result.show()
        }
        $title.text(steps[step].title);
        $summary.text(steps[step].summary);
        $button.text(steps[step].button);
    }
    renderStep(step);

    $button.on('click', function () {
        if (steps[step].result === null || steps[step].result === $result.val()) {
            $result.val('');
            step++;
            renderStep();
            window.location.hash = '#';
        } else if (steps[step].result === true) {
            window.location = 'https://www.youtube.com/watch?v=_2QaDZFD3wE';
        } else {
            $result.val('');
            $help.dequeue().fadeIn();
            setTimeout(function () {
                $help.fadeOut();
            }, 1000);
        }
    });
});