var scrollCount = 0;
document.getElementById('scroll-icon').addEventListener('click', function() {
    window.requestAnimationFrame(function() {
        scrollCount = window.pageYOffset;
        scrollDown()
    });
});
document.getElementById('p1').addEventListener('click', function() {
    window.requestAnimationFrame(function() {
        scrollCount = window.pageYOffset;
        scrollUp1()
    });
});
document.getElementById('p2').addEventListener('click', function() {
    window.requestAnimationFrame(function() {
        scrollCount = window.pageYOffset;
        scrollDown2()
    });
});
document.getElementById('p3').addEventListener('click', function() {
    window.requestAnimationFrame(function() {
        scrollCount = window.pageYOffset;
        scrollDown3()
    });
});
document.getElementById('p4').addEventListener('click', function() {
    window.requestAnimationFrame(function() {
        scrollCount = window.pageYOffset;
        scrollDown4()
    });
});
document.getElementById('p5').addEventListener('click', function() {
    window.requestAnimationFrame(function() {
        scrollCount = window.pageYOffset;
        scrollDown5()
    });
});
document.getElementById('p6').addEventListener('click', function() {
    window.requestAnimationFrame(function() {
        scrollCount = window.pageYOffset;
        scrollDown6()
    });
});
document.getElementById('p7').addEventListener('click', function() {
    window.requestAnimationFrame(function() {
        scrollCount = window.pageYOffset;
        scrollDown7()
    });
});

// document.getElementById('scroll-button').addEventListener('click', function() {
//     window.requestAnimationFrame(function() {
//         scrollCount = window.pageYOffset;
//         scrollDown()
//     });
// });

function bright() {
    // Get HTML head element
    var head = document.getElementsByTagName('HEAD')[0];

    // Create new link Element
    var link = document.createElement('link');

    // set the attributes for link element 
    link.rel = 'stylesheet';
    link.href = 'style_light.css';
    // Append link element to HTML head
    head.appendChild(link);
}

function dark() {
    // Get HTML head element
    var head = document.getElementsByTagName('HEAD')[0];

    // Create new link Element
    var link = document.createElement('link');

    // set the attributes for link element 
    link.rel = 'stylesheet';
    link.href = 'style_dark.css';
    // Append link element to HTML head
    head.appendChild(link);
}

function select1() {
    document.getElementById('p1').classList.add('selected-page');
    document.getElementById('p2').classList.remove('selected-page');
    document.getElementById('p3').classList.remove('selected-page');
    document.getElementById('p4').classList.remove('selected-page');
    document.getElementById('p5').classList.remove('selected-page');
    document.getElementById('p6').classList.remove('selected-page');
    document.getElementById('p7').classList.remove('selected-page');
}

function select2() {
    document.getElementById('p1').classList.remove('selected-page');
    document.getElementById('p2').classList.add('selected-page');
    document.getElementById('p3').classList.remove('selected-page');
    document.getElementById('p4').classList.remove('selected-page');
    document.getElementById('p5').classList.remove('selected-page');
    document.getElementById('p6').classList.remove('selected-page');
    document.getElementById('p7').classList.remove('selected-page');
}

function select3() {
    document.getElementById('p1').classList.remove('selected-page');
    document.getElementById('p2').classList.remove('selected-page');
    document.getElementById('p3').classList.add('selected-page');
    document.getElementById('p4').classList.remove('selected-page');
    document.getElementById('p5').classList.remove('selected-page');
    document.getElementById('p6').classList.remove('selected-page');
    document.getElementById('p7').classList.remove('selected-page');
}

function select4() {
    document.getElementById('p1').classList.remove('selected-page');
    document.getElementById('p2').classList.remove('selected-page');
    document.getElementById('p3').classList.remove('selected-page');
    document.getElementById('p4').classList.add('selected-page');
    document.getElementById('p5').classList.remove('selected-page');
    document.getElementById('p6').classList.remove('selected-page');
    document.getElementById('p7').classList.remove('selected-page');
}

function select5() {
    document.getElementById('p1').classList.remove('selected-page');
    document.getElementById('p2').classList.remove('selected-page');
    document.getElementById('p3').classList.remove('selected-page');
    document.getElementById('p4').classList.remove('selected-page');
    document.getElementById('p5').classList.add('selected-page');
    document.getElementById('p6').classList.remove('selected-page');
    document.getElementById('p7').classList.remove('selected-page');
}

function select6() {
    document.getElementById('p1').classList.remove('selected-page');
    document.getElementById('p2').classList.remove('selected-page');
    document.getElementById('p3').classList.remove('selected-page');
    document.getElementById('p4').classList.remove('selected-page');
    document.getElementById('p5').classList.remove('selected-page');
    document.getElementById('p6').classList.add('selected-page');
    document.getElementById('p7').classList.remove('selected-page');
}

function select7() {
    document.getElementById('p1').classList.remove('selected-page');
    document.getElementById('p2').classList.remove('selected-page');
    document.getElementById('p3').classList.remove('selected-page');
    document.getElementById('p4').classList.remove('selected-page');
    document.getElementById('p5').classList.remove('selected-page');
    document.getElementById('p6').classList.remove('selected-page');
    document.getElementById('p7').classList.add('selected-page');
}

function scrollUp() {
    scrollCount -= 25;
    if (window.pageYOffset > document.getElementById('hero').clientHeight) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollUp();
        });
    } else {}
};

function scrollUp1() {
    scrollCount -= 25;
    if (window.pageYOffset > 0) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollUp1();
        });
    } else {}
};

function scrollUp2() {
    scrollCount -= 25;
    if (window.pageYOffset > document.getElementById('page2').offsetTop) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollUp2();
        });
    } else {}
};

function scrollUp3() {
    scrollCount -= 25;
    if (window.pageYOffset > document.getElementById('page3').offsetTop) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollUp3();
        });
    } else {}
};

function scrollUp4() {
    scrollCount -= 25;
    if (window.pageYOffset > document.getElementById('page4').offsetTop) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollUp4();
        });
    } else {}
};

function scrollUp5() {
    scrollCount -= 25;
    if (window.pageYOffset > document.getElementById('page5').offsetTop) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollUp5();
        });
    } else {}
};

function scrollUp6() {
    scrollCount -= 25;
    if (window.pageYOffset > document.getElementById('page6').offsetTop) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollUp6();
        });
    } else {}
};

function scrollUp7() {
    scrollCount -= 25;
    if (window.pageYOffset > document.getElementById('page7').offsetTop) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollUp7();
        });
    } else {}
};

function scrollDown() {
    scrollCount += 25;
    if (window.pageYOffset < document.getElementById('hero').clientHeight) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollDown();
        });
    } else if (window.pageYOffset > document.getElementById('hero').clientHeight) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollUp();
        });
    } else {}
};

function scrollDown2() {
    scrollCount += 25;
    if (window.pageYOffset < document.getElementById('page2').offsetTop) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollDown2();
        });
    } else if (window.pageYOffset > document.getElementById('page2').offsetTop) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollUp2();
        });
    } else {}
};

function scrollDown3() {
    scrollCount += 25;
    if (window.pageYOffset < document.getElementById('page3').offsetTop) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollDown3();
        });
    } else if (window.pageYOffset > document.getElementById('page3').offsetTop) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollUp3();
        });
    } else {}
};

function scrollDown4() {
    scrollCount += 25;
    if (window.pageYOffset < document.getElementById('page4').offsetTop) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollDown4();
        });
    } else if (window.pageYOffset > document.getElementById('page4').offsetTop) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollUp4();
        });
    } else {}
};

function scrollDown5() {
    scrollCount += 25;
    if (window.pageYOffset < document.getElementById('page5').offsetTop) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollDown5();
        });
    } else if (window.pageYOffset > document.getElementById('page5').offsetTop) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollUp5();
        });
    } else {}
};

function scrollDown6() {
    scrollCount += 25;
    if (window.pageYOffset < document.getElementById('page6').offsetTop) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollDown6();
        });
    } else if (window.pageYOffset > document.getElementById('page6').offsetTop) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollUp6();
        });
    } else {}
};

function scrollDown7() {
    scrollCount += 25;
    if (window.pageYOffset < document.getElementById('page7').offsetTop) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            if (window.pageYOffset >= document.getElementById('page7').offsetTop - 50) {
                window.scrollTo(0, document.getElementById('page7').offsetTop - 50);
            } else {
                scrollDown7();
            }
        });
    } else if (window.pageYOffset > document.getElementById('page7').offsetTop) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollUp7();
        });
    } else {}
};
window.onscroll = function() {
    // console.log(window.pageYOffset+" "+document.getElementById('page6').offsetTop);
    if (window.pageYOffset >= document.getElementById('container').offsetTop) {
        select1();
    }
    if (window.pageYOffset >= document.getElementById('page2').offsetTop - 50) {
        select2();
        document.getElementById('col-left').classList.add('fade-in-left')
        window.setTimeout(function() {
            document.getElementById('calculator').classList.add('fade-in-bottom')
        }, 500)
    }
    if (window.pageYOffset >= document.getElementById('page3').offsetTop - 50) {
        select3();
        document.getElementById('col-right').classList.add('fade-in-right')
        window.setTimeout(function() {
            document.getElementById('col-left-overlay').classList.add('fade-in-bottom')
        }, 500)
    }
    if (window.pageYOffset >= document.getElementById('page4').offsetTop - 50) {
        select4();
        document.getElementById('col-right2').classList.add('fade-in-bottom')
        window.setTimeout(function() {
            document.getElementById('col-left-overlay').classList.add('fade-in-bottom')
        }, 500)
    }
    if (window.pageYOffset >= document.getElementById('page5').offsetTop - 50) {
        select5();
        document.getElementById('col-right3').classList.add('fade-in-top')
        window.setTimeout(function() {
            document.getElementById('imgfade').classList.add('fade-in-bottom')
        }, 500)
    }
    if (window.pageYOffset >= document.getElementById('page6').offsetTop - 50) {
        select6();
        document.getElementById('col-right4').classList.add('fade-in-top')
        window.setTimeout(function() {
            document.getElementById('col-left-overlay').classList.add('fade-in-bottom')
        }, 500)
    }
    if (window.pageYOffset >= document.getElementById('page7').offsetTop - 50) {
        select7();
        document.getElementById('col-right5').classList.add('fade-in-top')
        window.setTimeout(function() {
            document.getElementById('col-left-overlay').classList.add('fade-in-bottom')
        }, 500)
    }
}

// Calculator
document.getElementById("size").disabled = true;
document.getElementById("selector-cal").disabled = true;

function select() {
    var selected = document.getElementById("selector-cal").value;
    var choose = 0;
    if (selected == "house") {
        choose = 0;
    }
    return choose;
}

function sizechange() {
    var amount = document.getElementById("amount").value;
    num_amount = parseInt(amount);
    choose = select();
    if (choose == 0) {
        document.getElementById("size").value = 1.5 * num_amount;
    }
}

function calculate() {
    var size = document.getElementById("size").value;
    var amount = document.getElementById("amount").value;
    choose = select();
    num_size = parseFloat(size);
    num_amount = parseInt(amount);
    if (choose == 0) {
        var fund = 60000 * num_amount;
        var save = 10403 * num_amount;
    }
    if (save > 999999) {
        save /= 1000000;
        var unit_save = ' ล้านบาท/ปี';
    } else {
        var unit_save = ' บาท/ปี';
    }
    if (fund > 999999) {
        fund /= 1000000;
        var unit_fund = ' ล้านบาท';
    } else {
        var unit_fund = ' บาท';
    }
    document.getElementById("calculated-fund").innerHTML = 'ต้นทุน: ' + fund + unit_fund;
    document.getElementById("calculated-save").innerHTML = 'ประหยัด: ' + save + unit_save;
}
// -- //
// Image slideshow //
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
// -- //
// Image zoom //
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("FiT");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
        modal.style.display = "none";
    }
    // -- //