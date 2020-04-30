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
            title: "Под носом",
            summary: "То, что тебе надо, у тебя сейчас в руках. Найди задание и реши",
            button: "Я знаю ответ!",
            result: "1"
        },
        {
            name: "Задание второе",
            title: "Эй, Тони",
            summary: "Открой панду!",
            button: "Вперед!",
            result: "1"
        },
        {
            name: "Задание третье",
            title: "В темноте",
            summary: "Следуюший код ты найдешь в самой большой темной комнате, но только при лучах ИНОГО света",
            button: "Нашла!",
            result: "1"
        },
        {
            name: "Задание четвертое",
            title: "Михалыч, это жесть",
            summary: "Иди на балкон и приберись там - это поможет найти подсказку",
            button: "Фух!",
            result: "7428"
        },
        {
            name: "Задание пятое",
            title: "Пораскинь мозгами",
            summary: "Ответом для этого задания будет самый большой атомный номер природного изотопа урана",
            button: "Я умею гуглить!",
            result: "238"
        },
        {
            name: "Задание шестое, не последнее",
            title: "Пораскинь мозгами #2",
            summary: "",
            button: "Я умею гуглить!",
            result: "1"
        },
        {
            name: "Задание седьмое",
            title: "Арт-терапия",
            summary: "Отдыхая у реки, ты найдешь ответ",
            button: "Отдохнула!",
            result: "64"
        },
        {
            name: "Задание восьмое",
            title: "Strange things",
            summary: "Ответ спрятан в диковинной вещи в обители единорогов",
            button: "Ну вы даете!",
            result: "9315"
        },
        {
            name: "Задание девятое",
            title: "Штампы, штампы, штампы",
            summary: "Ты пропесочила эту комнату, теперь тебе следует ее опечатать",
            button: "Ну вы даете!",
            result: "1718"
        },
        {
            name: "Десяточка",
            title: "Фух! Вот это жаришка!",
            summary: "Пора бы нам охладиться. Ответ спрятан В ТОМ, без чего не обойдется ни один коктейль",
            button: "Нашла!",
            result: "6713"
        },
        {
            name: "Финиш!",
            img_src: "https://st3.depositphotos.com/1177973/14063/i/450/depositphotos_140637504-stock-photo-funny-fat-man.jpg",
            title: "Поздравляю! Осталось получить подарок",
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