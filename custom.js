$(document).ready(function () {
    $("#publish_button").click(function () {
        var commentText = $("#comment_input").val();
        var newComment = `
            <div class="comments">
                <div class="profile">
                    <img src="anonymous_profile.jpg">
                </div>
                <div class="comment-content">
                    <p class="name">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Анонимный юзер</font>
                        </font>
                    </p>
                    <p>
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">${commentText}</font>
                        </font>
                    </p>
                </div>
                <div class="clr"></div>
                <div class="comment-status">
                    <span>
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Curte·comente</font>
                        </font>
                        <img src="like.png" width="15px" height="15px">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">0</font>
                        </font>
                    </span>
                    <small>
                        <font style="vertical-align: inherit;"></font>
                        <u>
                            <font style="vertical-align: inherit;"></font>
                        </u>
                    </small>
                </div>
            </div>
        `;

        $(".comments_face").append(newComment);
        $("#comment_input").val("");
    });
});