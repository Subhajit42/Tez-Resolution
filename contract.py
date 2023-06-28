import smartpy as sp

class Resolutions(sp.Contract):
    def __init__(self):
        self.init(strings = sp.big_map(tkey=sp.TAddress, tvalue=sp.TString))

    @sp.entry_point
    def add_string(self, params):
        print(params)
        sp.verify(sp.len(params["new_resolution"]) > 0, message="String must not be empty.")
        self.data.strings[sp.sender] = params["new_resolution"]
        sp.verify(sp.amount >= sp.tez(1), message="Insufficient funds to add the resolution.")

@sp.add_test(name="Example")
def test():
    scenario = sp.test_scenario()
    contract = Resolutions()

    # Test adding a string
    scenario.h1("Add Resolution")
    scenario += contract
    #contract.add_string({"new_resolution": "start reading"}).run(sender=sp.address("tz1User"))
    contract.add_string({"new_resolution" : input("Enter your resolution")}).run(sender=sp.address("tz1Us"),amount = sp.tez(1))

   # scenario.verify(contract.data.strings[sp.address("tz1User")] == "start reading")
