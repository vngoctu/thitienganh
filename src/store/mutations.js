export default {
    setDapAn(state, dapan) {
        state.dapan[dapan[1]] = {
            abcd: dapan[2],
            word: dapan[0]
        }
    },

    getDung(state, dapan) {
        let count = 0
        state.dapanDung = state.cauhoi.map((e, index) => ({id: index, word: e.as}))
        state.dapanDung.map((e, index) => (e.word == dapan[index])?count++:count)
        state.diem = count
    }
}