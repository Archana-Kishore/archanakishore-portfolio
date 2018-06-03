$(document).ready(function () {
    $('#resumeIcon').addClass('active-item');
    resumeIconOnCLick();
    projectsIconOnCLick();
    interestsIconOnClick();
    autoPlayYouTubeModal();
});

function resumeIconOnCLick() {
    $('#resumeIcon').on("click", function () {
        $('#resumeIcon').addClass('active-item');
        $('#projectsIcon').removeClass('active-item');
        $('#interestsIcon').removeClass('active-item');
        $('#ResumePreview').show();
        $('#ProjectsPreview').hide();
        $('#InterestsPreview').hide();
    });
}

function projectsIconOnCLick() {
    $('#projectsIcon').on("click", function () {
        $('#projectsIcon').addClass('active-item');
        $('#resumeIcon').removeClass('active-item');
        $('#interestsIcon').removeClass('active-item');
        $('#ResumePreview').hide();
        $('#ProjectsPreview').show();
        $('#InterestsPreview').hide();
    });
}

function interestsIconOnClick() {
    $('#interestsIcon').on("click", function () {
        $('#projectsIcon').removeClass('active-item');
        $('#resumeIcon').removeClass('active-item');
        $('#interestsIcon').addClass('active-item');
        $('#ResumePreview').hide();
        $('#ProjectsPreview').hide();
        $('#InterestsPreview').show();
    });
}

function autoPlayYouTubeModal() {
    //alert('Entered');
    var trigger = $("#videoLink").find('[data-toggle="modal"]');
    trigger.click(function () {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-theVideo"),
            videoSRCauto = videoSRC + "?autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
}