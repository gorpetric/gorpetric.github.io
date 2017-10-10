<template>
    <section class='home'>
        <h1>Goran Petričević</h1>
        <h3>blog <span class='separator'>/</span> portfolio <span class='separator'>/</span> personal playground</h3>
        <div class='social'>
            <a target='_blank' href='https://github.com/gorpetric' title='Github'><i class='fa fa-github'></i></a>
            <a target='_blank' href='http://codepen.io/goranp/' title='Codepen'><i class='fa fa-codepen'></i></a>
            <a target='_blank' href='https://twitter.com/gogichill' title='Twitter'><i class='fa fa-twitter'></i></a>
            <a target='_blank' href='https://www.facebook.com/yotriix' title='Facebook'><i class='fa fa-facebook'></i></a>
            <a target='_blank' href='https://www.youtube.com/yotrixx' title='Youtube'><i class='fa fa-youtube'></i></a>
            <a target='_blank' href='https://www.instagram.com/gogichill' title='Instagram'><i class='fa fa-instagram'></i></a>
        </div>
    </section>
</template>

<style scoped lang=sass>
    section.home
        padding: 20px

        span.separator
            color: green

        .social
            font-size: 30px

            a
                display: inline-block
                margin: 10px

                &:first-child
                    margin-left: 0
                &:last-child
                    margin-right: 0
</style>
