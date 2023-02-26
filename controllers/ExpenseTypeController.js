const DataModel = require("../models/ExpenseTypesModel");
const CreateService = require("../services/common/CreateService");
const DetailsByIDService = require("../services/common/DetailsByIDService");
const DropDownService = require("../services/common/DropDownService");
const ListService = require("../services/common/ListService");
const UpdateService = require("../services/common/UpdateService");

exports.CreateExpenseTypes=async (req, res) => {
    let Result= await CreateService(req,DataModel)
    res.status(200).json(Result)
}

exports.UpdateExpenseTypes=async (req, res) => {
    let Result=await UpdateService(req,DataModel)
    res.status(200).json(Result)
}

exports.ExpenseTypesList=async (req, res) => {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let SearchArray=[{Name: SearchRgx}]
    let Result= await ListService(req,DataModel,SearchArray)
    res.status(200).json(Result)
}

exports.ExpenseTypesDropDown=async (req, res) => {
    let Result= await DropDownService(req,DataModel,{_id:1,Name:1})
    res.status(200).json(Result)
}

exports.ExpenseTypesDetailsByID=async (req, res) => {
    let Result= await DetailsByIDService(req,DataModel)
    res.status(200).json(Result)
}