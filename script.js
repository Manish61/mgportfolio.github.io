<!DOCTYPE html>
<html lang="en">
<head>
    <!-- ... (previous code) -->
</head>
<body>
    <!-- ... (previous code) -->

    <script>
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);

                if (target) {
                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    </script>
</body>
</html>
