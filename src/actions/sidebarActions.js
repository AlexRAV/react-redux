import {SHOW_SIDEBAR, HIDE_SIDEBAR} from '../constants'

export function showSidebar() {
    return {
        type: SHOW_SIDEBAR
    }
}

export function hideSidebar() {
    return {
        type: HIDE_SIDEBAR,
    }
}