document.addEventListener('alpine:init', () => {
    Alpine.data('members', () => ({
        items: [
            {id: 1, np: 'zan', img: 'zan.jpg', nl: 'muhammad yazid fauzan', tl: '11 Juli 1997', zd: 'Cancer', tb: '165 cm', bb: '50 kg', gd: 'B', ig: 'myzdfzn', ytb: 'UCDq7n5XkZIOIfD30hLfTXGg', tt: 'myzdfzn'},
            {id: 2, np: 'tama', img: 'tama.jpg', nl: 'muhammad rizky pratama', tl: '06 Juni 1997', zd: 'Gemini', tb: '172 cm', bb: '58 kg', gd: '-', ig: 'rzkytmaa', ytb: '-', tt: '-'},
            {id: 3, np: 'shaldan', img: 'shaldan.jpg', nl: '-', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'shaldan_tama', ytb: '-', tt: '-'},
            {id: 4, np: 'frenklyn', img: 'frenklyn.jpg', nl: 'frenklyn fenuel febe', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'frenclean._', ytb: '-', tt: '-'},
            {id: 5, np: 'raihan', img: 'raihan.jpg', nl: '-', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'frappe.joe', ytb: '-', tt: '-'},
            {id: 6, np: 'iqbal', img: 'iqbal.jpg', nl: '-', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'onlybal88', ytb: '-', tt: '-'},
            {id: 7, np: 'alica', img: 'alica.jpg', nl: '-', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'alicaapriliaxx', ytb: '-', tt: '-'},
            {id: 8, np: 'mita', img: 'mita.jpg', nl: '-', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'hermitaliana', ytb: '-', tt: '-'},
            {id: 9, np: 'dinda', img: 'dinda.jpg', nl: '-', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'dndaa7jie', ytb: '-', tt: '-'},
            {id: 10, np: 'sarah', img: 'sarah.jpg', nl: '-', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'srhxbi121', ytb: '-', tt: '-'},
            {id: 11, np: 'neska', img: 'neska.jpg', nl: 'neiska maulidya', tl: '25 Juni 2000', zd: 'Cancer', tb: '153 cm', bb: '43 kg', gd: 'A', ig: 'neiskamaulidya', ytb: '-', tt: '-'},
            {id: 12, np: 'mina', img: 'mina.jpg', nl: '-', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'irmina._', ytb: '-', tt: '-'},
            {id: 13, np: 'ericka', img: 'ericka.jpg', nl: '-', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'ericka_l0630', ytb: '-', tt: '-'},
            {id: 14, np: 'kezia', img: 'kezia.jpg', nl: '-', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'kezialntn', ytb: '-', tt: '-'},
            {id: 15, np: 'nazwa', img: 'nazwa.jpg', nl: '-', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'nazwaywndra.p', ytb: '-', tt: '-'},
            {id: 16, np: 'arra', img: 'arra.jpg', nl: 'azzahra rizqilla safitri', tl: '07 Juli 2002', zd: 'Cancer', tb: '168 cm', bb: '50 kg', gd: 'O', ig: 'riiirap', ytb: '-', tt: 'changbinssi'},
            {id: 17, np: 'gesya', img: 'gesya.jpg', nl: '-', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'princessaagesya', ytb: '-', tt: '-'},
            {id: 18, np: 'aqila', img: 'aqila.jpg', nl: '-', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'aqu_aqila', ytb: '-', tt: '-'},
            {id: 19, np: 'kyu', img: 'kyu.jpg', nl: '-', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'qistyping', ytb: '-', tt: '-'},
            {id: 20, np: 'laura', img: 'laura.jpg', nl: '-', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'lauranggr_', ytb: '-', tt: '-'},
            {id: 21, np: 'felycia', img: 'felycia.jpg', nl: 'felycia stevanie', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'icylef_a.s', ytb: '-', tt: '-'},
            {id: 22, np: 'bernice', img: 'bernice.jpg', nl: 'bernice velonia brigyta', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'bernice.vb._', ytb: '-', tt: '-'},
            {id: 23, np: 'nadia', img: 'nadia.jpg', nl: 'nadia aulia vanesya', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'justt.nadx', ytb: '-', tt: '-'},
            {id: 24, np: 'ervid', img: 'ervid.jpg', nl: 'ervid appezaril chiang', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'ervid_12', ytb: '-', tt: '-'},
            {id: 25, np: 'michelle', img: 'michelle.jpg', nl: 'michelle angeliena richci', tl: '-', zd: '-', tb: '- cm', bb: '- kg', gd: '-', ig: 'millyyy_levornka', ytb: '-', tt: '-'}
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
