const state = {
    // { id: 商品id, count: 购买数量，selected: false  }
    // car: [],
    // { id: 商品id, count: 购买数量，selected: false  }
    car: getItem('car'),
    // 当前要购买的商品：buy: [{ id: '', count: '' }]
    // 当在购物车里点“去结算”时，就把购物车车中已经选中的商品放进去
    buy: getItem('buy')

}
function setItem (name, item) {
    localStorage.setItem(name, JSON.stringify(item))
}
function getItem (name) {
    return JSON.parse(localStorage.getItem(name) || '[]')
}
const getters = {
    // 获取商品数量
    getGoodsCount (state) {
        var goods = {}
        state.car.forEach(item => {
            goods[item.id] = item.count
        })
        return goods
    },
    // 获取商品有没有选中的状态值（selected）
    getGoodsSelected (state) {
        var goods = {}
        state.car.forEach(item => {
            goods[item.id] = item.selected
        })
        return goods
    },
    // 获取选中的商品的件数
    getSelectedCount (state) {
        var count = 0
        state.car.forEach(item => {
            if (item.selected) {
                count += item.count
            }
        })
        return count
    },
    // 获取选中的商品
    getSelectedGoods (state) {
        var goods = {}
        state.car.forEach(item => {
            if (item.selected) {
                goods[item.id] = item
            }
        })
        return goods
    },
    // 获取要购买的商品
    getBuy (state) {
        var goods = {}
        state.buy.forEach(item => {
            goods[item.id] = item
        })
        return goods
    }
}
const actions = {}
const mutations = {
    addCar (state, goodsinfo) {
        var flag = false
        state.car.some(item => {
            if (item.id == goodsinfo.id) {
                item.count += parseInt(goodsinfo.count)
                flag = true
                return true
            }
        })
        if (!flag) {
            state.car.push(goodsinfo)
        }
        setItem('car', state.car)
    },
    updateGoodsInfo (state, goodsinfo) {
        state.car.some(item => {
            if (item.id == goodsinfo.id) {
                item.count = parseInt(goodsinfo.count)
                return true
            }
        })
        setItem('car', state.car)
    },
    updateGoodsSelected (state, info) {
        state.car.some(item => {
            if (item.id == info.id) {
                item.selected = info.selected
            }
        })
        setItem('car', state.car)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
