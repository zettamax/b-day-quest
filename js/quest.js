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
    ];

    let step = 0;

    function renderStep() {
        $name.text(steps[step].name);
        if (steps[step].img_src) {
            $img.attr('src', steps[step].img_src);
        } else {
            $img.attr('src', '');
            $img.hide();
        }
        if (steps[step].result) {
            $result.show()
        } else {
            $result.hide();
        }
        $title.text(steps[step].title);
        $summary.text(steps[step].summary);
        $button.text(steps[step].button);
    }
    renderStep(step);

    $button.on('click', function () {
        if (!steps[step].result || steps[step].result === $result.val()) {
            $result.val('');
            step++;
            renderStep();
        } else {
            $result.val('');
            $help.dequeue().fadeIn();
            setTimeout(function () {
                $help.fadeOut();
            }, 1000);
        }
    });
});