const router=require('express').Router()
const HomeCtl=require('../control').Home

module.exports=router

router.route('/')
.get(HomeCtl.renderHome)