// API Feedbacks
async function renderFedbacks(){
    try {
        const data = await fetch('http://localhost:3000/feedbacks')
        // feedbackContainer.innerHTML = '<h1>Loading...</h1>';
        const feedbacks = await data.json();

        const feedbackContainer = document.getElementById('feedbacks-container');
        
       const feedbackContent = feedbacks.map((feedback) =>{
            const feedbackCard = `
            <div class="card-body">
                <img src="${feedback.img}" alt="Image 1">
                <h6>${feedback.name}</h6>
                <div class="text-card">
                    <p>
                        ${feedback.review}
                    </p>
                </div>
            </div>
        `;

        return feedbackCard;

        });

        feedbackContainer.innerHTML = feedbackContent;

    } catch (err){
        console.log(err);
    }
};







// SlideShow Best Product

// Seleksi semua elemen dengan kelas 'slide' dan 'dot' dari dokumen HTML
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Inisialisasi variabel untuk melacak indeks slide saat ini
let currentSlideBestProduct = 0;

// Fungsi untuk menampilkan slide berdasarkan indeks yang diberikan
function showSlide(n) {
    // Menghapus kelas 'active' dari semua elemen slide
    slides.forEach(slide => slide.classList.remove('active'));

    // Menghapus kelas 'active-dot' dari semua elemen dot (navigasi)
    dots.forEach(dot => dot.classList.remove('active-dot'));

    // Menggunakan modulo untuk memastikan nilai indeks berada dalam rentang yang valid
    currentSlideBestProduct = (n + slides.length) % slides.length;

    // Menambahkan kelas 'active' ke elemen slide dan 'active-dot' ke elemen dot yang sesuai
    slides[currentSlideBestProduct].classList.add('active');
    dots[currentSlideBestProduct].classList.add('active-dot');
}

// Menampilkan slide pertama saat halaman dimuat
showSlide(currentSlideBestProduct);

// Menambahkan event listener pada setiap elemen dot untuk navigasi manual
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index); // Memanggil fungsi showSlide dengan indeks dot yang diklik
    });
});

// Mengatur interval untuk mengganti slide secara otomatis setiap 3000 milidetik (3 detik)
setInterval(() => {
    showSlide(currentSlideBestProduct + 1); // Memanggil fungsi showSlide dengan indeks slide berikutnya
}, 5000);


// They spill the tea

// Mendapatkan semua elemen dengan kelas 'slide_spill' dan 'dot_spill'
const slides_spill = document.querySelectorAll('.slide_spill');
const dots_spill = document.querySelectorAll('.dot_spill');

// Menginisialisasi variabel untuk melacak indeks slide atau titik saat ini
let currentSlideSpillProduct = 0;

// Fungsi untuk menampilkan slide atau titik sesuai dengan indeks yang diberikan
function showSlide_spill(n) {
    // Menghapus kelas 'active-spill' dari semua elemen slide
    slides_spill.forEach(slide_spill => slide_spill.classList.remove('active-spill'));
    // Menghapus kelas 'active-dot' dari semua elemen titik
    dots_spill.forEach(dot_spill => dot_spill.classList.remove('active-dot'));
    // Menghitung indeks slide yang akan ditampilkan
    currentSlideSpillProduct = (n + slides_spill.length) % slides_spill.length;
    // Menambahkan kelas 'active-spill' ke elemen slide yang sesuai
    slides_spill[currentSlideSpillProduct].classList.add('active-spill');
    // Menambahkan kelas 'active-dot' ke elemen titik yang sesuai
    dots_spill[currentSlideSpillProduct].classList.add('active-dot'); 
}

// Menampilkan slide atau titik untuk indeks awal (0)
showSlide_spill(currentSlideSpillProduct);

// Menambahkan event listener untuk setiap elemen titik
dots_spill.forEach((dot_spill, index) => {
    dot_spill.addEventListener('click', () => {
        // Memanggil fungsi showSlide_spill dengan indeks titik sebagai argumen
        showSlide_spill(index);
    });
});

// Membuat interval untuk secara otomatis menampilkan slide berikutnya setiap 3000 milidetik (3 detik)
const slideInterval = setInterval(() => {
    // Menampilkan slide berikutnya
    showSlide_spill(currentSlideSpillProduct + 1);
}, 5000);


// Quiz

// Mengubah fungsi openTea menjadi fungsi initQuiz
function initQuiz() {
    // Ambil elemen pertama dengan class "tabcontent" dan tampilkan
    var defaultTab = document.querySelector(".tabcontent");
    defaultTab.style.display = "block";

    var defaultTabLink = document.querySelector(".tablinks");
    defaultTabLink.classList.add("active");
}


function openTea(evt, teaName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(teaName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Panggil fungsi initQuiz ketika halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    initQuiz();
});

// Play Quiz
const questions = [
    {
        question: "Apa ibu kota Indonesia?",
        options: ["Jakarta", "Bandung", "Surabaya", "Medan"],
        correctAnswer: "Jakarta"
    },
    {
        question: "Berapa hasil dari 5 + 3?",
        options: ["8", "10", "12", "15"],
        correctAnswer: "8"
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    showModal();
    showQuestion();
}

function showModal() {
    document.getElementById("quiz-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("quiz-modal").style.display = "none";
}

function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    const currentQuestionObj = questions[currentQuestion];

    questionContainer.innerHTML = `
        <h3>${currentQuestionObj.question}</h3>
        <ul>
            ${currentQuestionObj.options.map(option => `<li>${option}</li>`).join('')}
        </ul>
    `;
}

function checkAnswer() {
    const userAnswer = document.querySelector('input[name="answer"]:checked');

    if (userAnswer) {
        if (userAnswer.value === questions[currentQuestion].correctAnswer) {
            score++;
        }

        currentQuestion++;
        userAnswer.checked = false;

        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            displayResult();
        }
    } else {
        alert("Silakan pilih jawaban terlebih dahulu.");
    }
}

function displayResult() {
    closeModal();
    alert(`Quiz selesai!\nSkor Anda: ${score} dari ${questions.length}`);
    resetQuiz();
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
}


renderFedbacks();