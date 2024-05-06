document.addEventListener('alpine:init', () => {
    Alpine.data('members', () => ({
        items: [
            {id: 1, np: 'zan', img: 'zan.jpg', nl: 'muhammad yazid fauzan', tl: '11 Juli 1997', zd: 'Cancer', tb: '165 cm', bb: '50 kg', gd: 'B', ig: 'myzdfzn', ytb: 'MYFauzan', tt: 'myzdfzn'},
            {id: 2, np: 'tama', img: 'tama.jpg', nl: 'muhammad rizky pratama', tl: '06 Juni 1997', zd: 'Gemini', tb: '172 cm', bb: '58 kg', gd: '-', ig: 'rzkytmaa', ytb: '-', tt: '-'},
            {id: 3, np: 'shaldan', img: 'shaldan.jpg', nl: 'shaldan iman utama', tl: '09 Maret 2004', zd: 'Pisces', tb: '174 cm', bb: '60 kg', gd: '-', ig: 'shaldan_tama', ytb: '-', tt: '-'},
            {id: 4, np: 'frenklyn', img: 'frenklyn.jpg', nl: 'frenklyn fenuel febe', tl: '06 September 2022', zd: 'Virgo', tb: '170 cm', bb: '58 kg', gd: 'O', ig: 'frenclean._', ytb: 'frenclean._', tt: 'frenclean'},
            {id: 5, np: 'alica', img: 'alica.jpg', nl: 'alica aprilia fandini', tl: '08 April 2003', zd: 'Aries', tb: '153 cm', bb: '50 kg', gd: 'A', ig: 'alicaapriliaxx', ytb: '-', tt: 'oceanllie'},
            {id: 6, np: 'mita', img: 'mita.jpg', nl: 'hermiata liana', tl: '07 September 2003', zd: 'virgo', tb: '153 cm', bb: '48 kg', gd: '-', ig: 'hermitaliana', ytb: '-', tt: 'hzrmytx'},
            {id: 7, np: 'dinda', img: 'dinda.jpg', nl: 'dinda ayu pramutia', tl: '30 Januari 2005', zd: 'Aquarius', tb: '150 cm', bb: '47 kg', gd: 'A', ig: 'dndaa7jie', ytb: '-', tt: 'fankthnikochan'},
            {id: 8, np: 'sarah', img: 'sarah.jpg', nl: 'sarah fadila ramadhani', tl: '11 November 2004', zd: 'Scorpio', tb: '167 cm', bb: '52 kg', gd: 'A', ig: 'srhxbi121', ytb: '-', tt: 'disinidisana8'},
            {id: 9, np: 'neska', img: 'neska.jpg', nl: 'neiska maulidya', tl: '25 Juni 2000', zd: 'Cancer', tb: '153 cm', bb: '43 kg', gd: 'A', ig: 'neiskamaulidya', ytb: '-', tt: 'hanjjikseu'},
            {id: 10, np: 'mina', img: 'mina.jpg', nl: 'irmina citrawati', tl: '28 November 2000', zd: 'Sagitarius', tb: '155 cm', bb: '47 kg', gd: 'AB', ig: 'irmina._', ytb: '-', tt: 'irmina.c'},
            {id: 11, np: 'kezia', img: 'kezia.jpg', nl: 'kezia lenatan', tl: '01 Agustus 2007', zd: 'Leo', tb: '160 cm', bb: '50 kg', gd: '-', ig: 'kezialntn', ytb: '-', tt: '-'},
            {id: 12, np: 'nazwa', img: 'nazwa.jpg', nl: 'nazwa yuwandira putri', tl: '30 Desember 2005', zd: 'Capricorn', tb: '166 cm', bb: '50 kg', gd: 'O', ig: 'nazwaywndra.p', ytb: '-', tt: 'fumii_koo_'},
            {id: 13, np: 'arra', img: 'arra.jpg', nl: 'azzahra rizqilla safitri', tl: '07 Juli 2002', zd: 'Cancer', tb: '168 cm', bb: '50 kg', gd: 'O', ig: 'riiirap', ytb: '-', tt: 'changbinssi'},
            {id: 14, np: 'gesya', img: 'gesya.jpg', nl: 'destiny princessa adinda gesya', tl: '20 Mei 2011', zd: 'Taurus', tb: '167 cm', bb: '45 kg', gd: 'B', ig: 'princessaagesya', ytb: '-', tt: '-'},
            {id: 15, np: 'aqila', img: 'aqila.jpg', nl: 'aqila setiya diyana', tl: '21 Oktober 2002', zd: 'Libra', tb: '157 cm', bb: '50 kg', gd: 'B+', ig: 'aqu_aqila', ytb: '-', tt: 'aqu_aqila'},
            {id: 16, np: 'kyu', img: 'kyu.jpg', nl: 'quaneisha farraz kadziyah tsamarah', tl: '01 Mei 2008', zd: 'Taurus', tb: '148 cm', bb: '49 kg', gd: 'A', ig: 'qistyping', ytb: '-', tt: 'qistyping'},
            {id: 17, np: 'laura', img: 'laura.jpg', nl: 'laura anggraini', tl: '06 November 1999', zd: 'Scorpio', tb: '169 cm', bb: '55 kg', gd: 'O', ig: 'lauranggr_', ytb: '-', tt: '-'},
            {id: 18, np: 'felycia', img: 'felycia.jpg', nl: 'felycia stevanie', tl: '12 Juni 2007', zd: 'Gemini', tb: '155 cm', bb: '42 kg', gd: 'O', ig: 'icylef_a.s', ytb: '-', tt: 'f_vanieee'},
            {id: 19, np: 'bernice', img: 'bernice.jpg', nl: 'bernice velonia brigyta', tl: '11 Oktober 2009', zd: 'Libra', tb: '155 cm', bb: '42 kg', gd: 'O', ig: 'bernice.vb._', ytb: '-', tt: 'rnv3l0'},
            {id: 20, np: 'nadia', img: 'nadia.jpg', nl: 'nadia aulia vanesya', tl: '7 Juli 2011', zd: 'Cancer', tb: '161 cm', bb: '39 kg', gd: 'O', ig: 'justt.nadx', ytb: '-', tt: 'nadianormalbanget'},
            {id: 21, np: 'michelle', img: 'michelle.jpg', nl: 'michelle angeliena richci', tl: '24 Mei 2008', zd: 'Gemini', tb: '153 cm', bb: '43 kg', gd: 'O', ig: 'millyyy_levornka', ytb: '-', tt: 'millyyy_levornka'},
            {id: 22, np: 'rani', img: 'rani.jpg', nl: 'zamarani', tl: '19 Maret 2005', zd: 'Pisces', tb: '150 cm', bb: '50 kg', gd: 'AB', ig: 'ra_neyy', ytb: '-', tt: '-'},
            {id: 23, np: 'made', img: 'made.jpg', nl: 'ni made zivara elviana', tl: '28 Juli 2011', zd: 'Leo', tb: '173 cm', bb: '61 kg', gd: 'O', ig: 'hwangrenjunq', ytb: '-', tt: 'avocadoesq'},
            {id: 24, np: 'zahra', img: 'zahra.jpg', nl: '-', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: '-', ytb: '-', tt: '-'},
            {id: 25, np: 'zefa', img: 'zefa.jpg', nl: '-', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: '-', ytb: '-', tt: '-'},
            {id: 26, np: 'endang', img: 'endang.jpg', nl: 'Endang Sulistiawati', tl: '21 Mei 2004', zd: 'Gemini', tb: '162 cm', bb: '48 kg', gd: 'B+', ig: 'illlaszs', ytb: '-', tt: 'illlaszs'}
        ]
    }));

    Alpine.store('details', {
        showDetail: false,
        selectedItem: {},
        detailItem(member) {
            this.selectedItem = member;
            this.showDetail = true;
            // console.log(member, this.showDetail);
        }
    });
});

window.alpineComponent = () => {
    return {
        shouldShowSocials() {
            const selectedItem = this.$store.details.selectedItem;

            // Check if any social media value is "-"
            return selectedItem.ig !== '-' || selectedItem.ytb !== '-' || selectedItem.tt !== '-';
        }
    };
};
