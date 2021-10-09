let selection = {
    'Akademi Sekretari Manajemen Indonesia Klabat': ['Sekretari (D3)'],
    'Fakultas Ekonomi dan Bisnis': ['Akuntansi', 'Manajemen'],
    'Fakultas Filsafat': ['Ilmu Filsafat'],
    'Fakultas Ilmu Komputer': ['Informatika', 'Sistem Informasi'],
    'Fakultas Keguruan dan Ilmu Pendidikan': ['Pendidikan Agama', 'Pendidikan Bahasa Inggris', 'Pendidikan Ekonomi', 'Pendidikan Luar Sekolah'],
    'Fakultas Keperawatan': ['Keperawatan', 'Profesi Ners'],
    'Fakultas Pertanian': ['Agroteknologi'],
    'Pascasarjana': ['Magister Manajemen', 'Magister Teologi']
}
window.onload = function () {
    let fakultas = document.getElementById('fakultas');
    let prodi = document.getElementById('prodi');
    for (let x in selection) {
        fakultas.options[fakultas.options.length] = new Option(x, x);
    }
    fakultas.onchange = function () {
        prodi.length = 1;
        let z = selection[this.value];
        for (let i = 0; i < z.length; i++) {
            prodi.options[prodi.options.length] = new Option(z[i], z[i])
        }
    }
}