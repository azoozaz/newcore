window.onload = function() {
    setTimeout(() => {
        document.getElementById("splash").style.display = "none";
        showSection("landing");
    }, 10000);
};

function toggleTheme() {
    document.body.classList.toggle("light");
}

function showSection(id) {
    document.querySelectorAll(".page-section").forEach((s) => {
        s.classList.add("hidden");
    });
    document.getElementById(id).classList.remove("hidden");
}

function switchLang(lang) {
    alert("Language switching coming soon. Selected: " + lang);
}

// ✅ ربط نموذج الطلب بـ API البوت على الخادم
document.getElementById("requestForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const discord = document.getElementById("discord").value;
    const phone = document.getElementById("phone").value;
    const details = document.getElementById("details").value;

    try {
        const res = await fetch("http://127.0.0.1:3000/api/send-ticket", {

            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, discord, phone, details }),
        });

        if (res.ok) {
            alert("✅ تم إرسال طلبك بنجاح! تم فتح تذكرة.");
            document.getElementById("requestForm").reset();
        } else {
            alert("❌ حدث خطأ أثناء إرسال الطلب.");
        }
    } catch (err) {
        console.error(err);
        alert("🚫 لم نتمكن من الاتصال بالخادم.");
    }
});