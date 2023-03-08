function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function addSponsors(intel){
    var html = ""
    html += '        <div class="row">'
    html += '<h3>Sponsors:</h3>'
    html += '</div>'


    html += '<div class="row spacing">'
    html +='<div class="col-md-2">'
    html +=  '<div class="text-center">'
    html +=   ' <a href="https://www.acm.org/" >'
    html +=      '<img src="images/acm_logo_tablet.svg" height="75" class="logo">'
    html +=    '</a>'
    html += ' </div>'
    html +=' </div>'
    html +='</div>'

    html += '<div class="row spacing">'
    html +='<div class="col-md-2">'
    html +=  '<div class="text-center">'
    html +=   ' <a href="https://www.sigarch.org/" >'
    html +=      '<img src="images/ACM_SIGARCH_logo.png" height="75" class="logo">'
    html +=    '</a>'
    html += ' </div>'
    html +=' </div>'
    html +='</div>'


    html += '<div class="row">'
    html += '<h3>Supporters:</h3>'
    html += '</div>'

    if(intel!=null){
        html += '<div class="row spacing">'
        html +='<div class="col-md-2">'
        html +=  '<div class="text-center">'
        html +=   ' <a href="https://www.intel.com/" >'
        html +=      '<img src="images/intel/intel'+intel+'.png" height="75" class="logo">'
        html +=    '</a>'
        html += ' </div>'
        html +=' </div>'
        html +='</div>'
        }

    html += '<div class="row spacing">'
    html +='<div class="col-md-2">'
    html +=  '<div class="text-center">'
    html +=   ' <a href="https://www.genivia.com/" >'
    html +=      '<img src="images/genivia.png" height="75" class="logo">'
    html +=    '</a>'
    html += ' </div>'
    html +=' </div>'
    html +='</div>'

    $("#supporters").append(html)

}
