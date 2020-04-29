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
            summary: "Пройти",
            button: "Вперед!",
            result: null
        },
        {
            name: "Первое задание",
            title: "С днем рождения!",
            summary: "Пройти",
            button: "Вперед!",
            result: "1313"
        },
        {
            name: "Финиш",
            img_src: "https://st3.depositphotos.com/1177973/14063/i/450/depositphotos_140637504-stock-photo-funny-fat-man.jpg",
            title: "Поздравляю! Квест пройден :)",
            summary: "Ты успешно прошла все задания",
            button: "Открыть поздравление",
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
            window.location = 'http://google.com';
        } else {
            $result.val('');
            $help.dequeue().fadeIn();
            setTimeout(function () {
                $help.fadeOut();
            }, 1000);
        }
    });
});