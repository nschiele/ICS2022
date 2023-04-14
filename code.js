function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function addSponsors(intel = 2, harry) {
    var html = ""
    html += '        <div class="row">'
    html += '<h3>Sponsors:</h3>'
    html += '</div>'


    html += '<div class="row spacing">'
    html += '<div class="col-md-2">'
    html += '<div class="text-center">'
    html += ' <a href="https://www.acm.org/" >'
    html += '<img src="images/acm_logo_tablet.svg" height="75" class="logo">'
    html += '</a>'
    html += ' </div>'
    html += ' </div>'
    html += '</div>'

    html += '<div class="row spacing">'
    html += '<div class="col-md-2">'
    html += '<div class="text-center">'
    html += ' <a href="https://www.sigarch.org/" >'
    html += '<img src="images/ACM_SIGARCH_logo.png" height="75" class="logo">'
    html += '</a>'
    html += ' </div>'
    html += ' </div>'
    html += '</div>'


    html += '<div class="row">'
    html += '<h3>Supporters:</h3>'
    html += '</div>'

    if (true) {
        html += '<div class="row spacing">'
        html += '<div class="col-md-2">'
        html += '<div class="text-center">'
        html += ' <a href="https://www.intel.com/" >'
        if (intel != null) {
            html += '<img src="images/intel/intel' + intel + '.png" height="75" class="logo">'
        } else {
            html += '<img src="images/intel/intel2' + '.png" height="75" class="logo">'
        }
        html += '</a>'
        html += ' </div>'
        html += ' </div>'
        html += '</div>'
        html += '<br>'
    }

    html += '<div class="row spacing">'
    html += '<div class="col-md-2">'
    html += '<div class="text-center">'
    html += ' <a href="https://www.genivia.com/" >'
    html += '<img src="images/genivia.png" height="75" class="logo">'
    html += '</a>'
    html += ' </div>'
    html += ' </div>'
    html += '</div>'

    if (harry != null) {

        html += '<div class="row">'
        html += '<h3><a href="memoriam.html#memorial">In Memoriam</a></h3>'
        html += '</div>'
        html += '<div class="row spacing">'
        html += '<br>'
        html += '</div>'

        // html += '<div class="row spacing">'
        // html += ' <h4>'
        // html += 'With great sadness, we report the passing of a long-time ICS Steering Committee member Harry Wijshoff. Harry attended ICS starting with the first conference in 1987 and made numerous contributions to ICS. We will miss his intellect, sense of humor, and friendship!'
        // html += '</h4>'
        // html += '</div>'

        // html += '<div class="row spacing pt-n0">'
        // html += ' <h4>'
        // html += 'ICS greatfully acknowledges the donations of support made in memory of,'
        // html += '</h4>'
        // html += '<ul>'
        // html += '<li><h4>Harry Wijshoff, 2023</h4></li>'
        // html += '<li><h4>Utpal Banerjee, 2017</h4></li>'
        // html += '<li><h4>Theo Papatheodorou, 2012</h4></li>'
        // html += '<li><h4>Stamatis Vassiliadis, 2007</h4></li>'
        // html += '<li><h4>Ken Kennedy, 2007</h4></li>'
        // html += '</ul>'
        // html += '</div>'


    }

    $("#supporters").append(html)

    var intelMessage = "<p>Intel and the Intel logo are trademarks of Intel Corporation or its subsidiaries.</p>"

    $("#intelMessage").append(intelMessage)

}
